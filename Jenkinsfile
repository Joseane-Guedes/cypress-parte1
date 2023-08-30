pipeline {
    agent any

    environment {
        PATH = "${tool 'nodejs'}/bin:${env.PATH}"
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
