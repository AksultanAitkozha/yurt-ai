from .adapters.s3_service import S3Service
from .adapters.replicate_service import ReplicateService


class Service:
    def __init__(self):
        self.replicate_service = ReplicateService()
        self.s3_service = S3Service()


def get_service():
    svc = Service()
    return svc
