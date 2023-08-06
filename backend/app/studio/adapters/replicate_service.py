import os
import requests
import time

REPLICATE_API_KEY = os.getenv("REPLICATE_API_KEY")


class ReplicateService:
    async def start_replicate_prediction(self, s3_file_url, prompt_string):
        startResponse = requests.post(
            "https://api.replicate.com/v1/predictions",
            headers={
                "Content-Type": "application/json",
                "Authorization": "Token " + REPLICATE_API_KEY,
            },
            json={
                "version":
                    "854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
                "input": {
                    "image": s3_file_url,
                    "prompt": prompt_string,
                    "image_resolution": "768",
                    "n_prompt": "text, letters, logo, longbody, lowres, bad anatomy, bad\
                        hands, missing fingers,\
                        extra digit, fewer digits, cropped, worst quality, low quality,\
                            trees",
                },
            },
        )

        return startResponse.json()

    async def poll_replicate_prediction(self, endpointUrl):
        restoredImage = None
        while not restoredImage:
            print("polling for result...")
            finalResponse = requests.get(
                endpointUrl,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": "Token " + REPLICATE_API_KEY,
                },
            )
            finalResponseData = finalResponse.json()

            if finalResponseData["status"] == "succeeded":
                restoredImage = finalResponseData["output"]
            elif finalResponseData["status"] == "failed":
                break
            else:
                time.sleep(1)

        return restoredImage
