from decoder import decode_stream
from detector import detect_objects
from classifier import classify_objects
from utils import log_metrics

def process_camera_stream(camera_url, device='CPU'):
    print(f"[INFO] Starting pipeline for camera: {camera_url} on device: {device}")
    frames = decode_stream(camera_url)
    detections = detect_objects(frames, device=device)
    classifications = classify_objects(detections, device=device)
    log_metrics(classifications)
    print("[INFO] Pipeline execution completed.")

if __name__ == "__main__":
    camera_streams = [
        "rtsp://camera1/live",
        "rtsp://camera2/live",
        "rtsp://camera3/live"
    ]
    for cam in camera_streams:
        process_camera_stream(cam, device='GPU')
