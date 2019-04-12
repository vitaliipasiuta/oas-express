pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3030:3030'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
    environment {
        CI = 'true'
    }
}
