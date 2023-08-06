from fastapi import UploadFile, Depends, HTTPException
from starlette.responses import JSONResponse
from typing import Optional
from ..service import Service, get_service

from . import router


@router.post("/uploadfile")
async def create_upload_file(
    file: UploadFile, options: Optional[str] = None, svc: Service = Depends(get_service)
):
    file_content = await file.read()

    s3_file_url = await svc.s3_service.upload_to_s3(file_content, file.filename)

    if options:
        style, material, location, season = options.split(",")[:4]
        prompt_string = (
            f"{style} {material} {location} {season} photorealistic render of house 4K"
        )
    else:
        prompt_string = "realistic render of house"

    startResponseData = await svc.replicate_service.start_replicate_prediction(
        s3_file_url, prompt_string
    )
    endpointUrl = startResponseData.get("urls", {}).get("get")

    if not endpointUrl:
        raise HTTPException(status_code=500, detail="Failed to start prediction.")

    restoredImage = await svc.replicate_service.poll_replicate_prediction(endpointUrl)

    if restoredImage:
        return JSONResponse(content=restoredImage)
    else:
        return JSONResponse(content="Failed to restore image")
