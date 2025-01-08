## 1. Check all images  
```bash
sudo docker images
```  
##### Preview:  
![](../Z_Photos/065.png)  
## 2. Check running containers  
```bash
sudo docker ps
```  
##### Preview:  
![](../Z_Photos/066.png)  
## 3. Kill the running container / (stop command or kill command both works)
```bash
sudo docker kill bro
```  
OR
```bash
sudo docker stop bro
```  
##### Preview:  
![](../Z_Photos/067.png)  
##### Preview:  
![](../Z_Photos/068.png)  
```vbnet
kill: Immediately stops the container (forceful).
stop: Gracefully stops the container by allowing running processes to exit.
```  
## 4. Remove the container  
```bash
sudo docker ps -a
```  
##### Preview:  
![](../Z_Photos/069.png)  
```bash
sudo docker rm lolo
```  
##### Preview:  
![](../Z_Photos/073.png)  
## 5. Remove the Image  
### using name  
```bash
sudo docker image rm -f mysql
```  
OR
```bash
sudo docker rmi -f mysql
```  
##### Preview:  
![](../Z_Photos/070.png)  
### using imageID  
```bash
sudo docker images
```  
##### Preview:  
![](../Z_Photos/071.png)  
```bash
sudo docker image rm -f 56a8c14e1404
```  
OR
```bash
sudo docker rmi -f 56a8c14e1404
```  
```vbnet
-f : flag forces removal even if the image is in use by stopped containers.
rmi : stands remove image <!-- prefered way to remove image -->
```  
## 6. Revison  
```bash
# Check all images
sudo docker images

# Check all containers
sudo docker ps -a

# Stop running container (if any)
sudo docker stop bro

# Remove container
sudo docker rm bro

# Remove image by name
sudo docker rmi -f mysql

# Or remove image by ID
sudo docker rmi -f 56a8c14e1404

```  