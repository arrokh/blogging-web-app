clear
echo "================================================"
echo "============== Remove old container ============"
echo "================================================"
docker rm -f bwa-api
echo "================================================"
echo "=============== Build new image ================"
echo "================================================"
docker build -t arrokh/bwa-api:1.0 .
echo "================================================"
echo "========== Build and run new container ========="
echo "================================================"
docker run -d -p 4000:8080 --name bwa-api arrokh/bwa-api:1.0
echo "================================================"
echo "===================== Logs ====================="
echo "================================================"
docker ps