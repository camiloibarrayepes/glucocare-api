pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        skipDefaultCheckout(true)
    }

    environment {
        GCP_PROJECT_ID = 'glucocare-api'
        GCP_LOCATION   = 'us-central1'
        AR_REPOSITORY  = 'glucocare-api-repo'
        APP_NAME       = 'glucocare-api-name'
        REGISTRY       = 'us-central1-docker.pkg.dev'
    }

    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    env.IMAGE = "${env.REGISTRY}/${env.GCP_PROJECT_ID}/${env.AR_REPOSITORY}/${env.APP_NAME}"

                    env.IMAGE_TAG = sh(
                        script: 'git rev-parse --short=12 HEAD',
                        returnStdout: true
                    ).trim()

                    env.BUILD_TAG = "build-${env.BUILD_NUMBER}"
                }

                sh '''
                    docker build \
                      --tag "$IMAGE:$IMAGE_TAG" \
                      --tag "$IMAGE:$BUILD_TAG" \
                      .
                '''
            }
        }

        stage('Publish image') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'gcp-artifact-registry-token',
                        variable: 'GCP_ACCESS_TOKEN'
                    )
                ]) {
                    sh '''
                        set +x

                        printf '%s' "$GCP_ACCESS_TOKEN" | docker login \
                          "$REGISTRY" \
                          --username oauth2accesstoken \
                          --password-stdin

                        docker push "$IMAGE:$IMAGE_TAG"
                        docker push "$IMAGE:$BUILD_TAG"
                    '''
                }
            }
        }
    }

    post {
        always {
            sh '''
                docker logout "$REGISTRY" || true
            '''
        }

        success {
            echo "Published $IMAGE:$IMAGE_TAG and $IMAGE:$BUILD_TAG"
        }
    }
}