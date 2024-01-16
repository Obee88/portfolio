def imageName = 'unset'

pipeline {
    agent any
    stages {
        stage('Define image name') {
            steps {
                script {
                    imageName = "davor-obilinovic:${BUILD_NUMBER}"
                }
                echo "imageName: ${imageName}"
            }
        }
        stage('Build docker image') {
            steps {
                script {
                    sh "docker build -t ${imageName} --progress plain ."
                }
            }
        }
        stage('Clean old resources') {
            steps {
                script {
                    sh "docker ps -a --format '{{.Names}}' | grep -E \"davor-obilinovic\" | xargs -r docker rm -f"
                }
                script {
                    def minTag = BUILD_NUMBER.toInteger() - 1
                    sh "docker images | grep 'davor-obilinovic' | awk '\$2 < $minTag {print \$1\":\"\$2}' | xargs -r docker rmi"
                }
            }
        }
        stage('Run docker container') {
            steps {
                script {
                    sh "docker run --name davor-obilinovic --network web-network -d $imageName"
                }
            }
        }
    }
}