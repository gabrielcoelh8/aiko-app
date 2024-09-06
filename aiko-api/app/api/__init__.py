from fastapi import APIRouter

router = APIRouter()

@router.post(
    path='/rota/api',
    summary="",
    description=""
)
def rota(request):
    return