pipeline {
agent any

environment {
    DEPLOY_DIR = 'C:\\JenkinsDeploy'
}

stages {

    stage('Checkout') {
        steps {
            echo 'Cloning project from GitHub...'

            git branch: 'main',
                url: 'https://github.com/suryajeet055/Jenkins-CICD-Web-App.git'
        }
    }

    stage('Build') {
        steps {
            echo 'Build step started successfully!'
            bat 'dir'
        }
    }

    stage('Test') {
        steps {
            echo 'Testing web application...'

            bat '''
            if exist index.html (
                echo index.html found successfully!
            ) else (
                echo ERROR: index.html not found!
                exit /b 1
            )
            '''
        }
    }

    stage('Deploy') {
        steps {
            echo 'Deploying web application...'

            bat '''
            if not exist C:\\JenkinsDeploy mkdir C:\\JenkinsDeploy
            xcopy /E /Y /I * C:\\JenkinsDeploy\\
            '''
        }
    }
}

post {

    success {
        echo 'Pipeline finished successfully!'
    }

    failure {
        echo 'Pipeline failed! Check build logs.'
    }
}

}
