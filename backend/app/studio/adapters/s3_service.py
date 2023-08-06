import os
import boto3

s3 = boto3.client(
    "s3",
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
    region_name="eu-central-1",
)

bucket_name = "yurt-bucket"


class S3Service:
    async def upload_to_s3(self, file_content, file_name):
        s3.put_object(Bucket=bucket_name, Key=file_name, Body=file_content)
        s3_file_url = f"https://{bucket_name}.s3.amazonaws.com/{file_name}"
        return s3_file_url
