pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'Node18', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clonar repositório') {
            steps {
               git branch: 'main', url: 'https://github.com/Joseane-Guedes/cypress-parte1.git' 
            }
        }
                stage('Instalar dependências') {
            steps {
                sh 'npm install -f'
            }
        }
                stage('Executar testes') {
            steps {
                 sh 'npm run cy:run'
            }
        }
    }
}