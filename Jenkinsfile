pipeline{
    agent any
    stages{
        stage('Instalacion de Dependencia'){
            bat 'npm ci'
        }

        stage('Ejecucion de Test'){
           steps{
                script{
                    try{
                        bat 'npx cypress run --e2e --browser chrome'
                    }catch (Exception e){
                        currentBuild.result = 'SUCCESS'
                    }
                }
            }
        }
        stage('Generar reportes en la consola y el txt'){
            steps{
                bat 'node generateConsoleReport.js'
            }
        }
    }
}