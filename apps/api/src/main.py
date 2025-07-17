from fastapi import FastAPI

app = FastAPI(title="Skill‑Match API")

@app.get("/api/health")
def health():
    return {"status": "ok"}
