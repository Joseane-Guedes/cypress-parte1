pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
               git branch: 'main', url: 'https://github.com/Joseane-Guedes/cypress-parte1.git' 
            }
        }
                stage('Instalar dependências') {
            steps {
                bat 'npm install -f'
            }
        }
                stage('Executar testes') {
            steps {
                 bat 'npm run cy:run'
            }
        }
    }
}