pipeline {
    agent any
    // tools { nodejs 'NODEJS' }
    stages {
      
        // stage('Install Dependencies') {
        //     steps {
        //         bat 'npm install --legacy-peer-deps'
        //     }
        // }
      
     // stage('Testing Stage') {
     //        steps {
     //            // bat 'npm run ng test --no-watch --code-coverage'
     //         bat 'npm run test -- --watch=false --code-coverage'
     //        }
     //    }
        // stage('Deliver') {
        //     steps {
        //         bat 'npm run ng build'
        //       bat 'start /B npm run ng serve'
        //         echo 'Now...'
        //         echo 'Visit http://localhost:4200 to see your Node.js/Angular application in action.'
        //         input message: 'Finished using the website? (Click "Proceed" to continue)'  
        //       bat 'npx kill-port 4200'
        //     }
        // }


       stage('Build') {
            steps {
                bat 'npm run build --prod'
            }
        }

        stage('Deploy to Render') {
            steps {
                script {
                    def buildDir = 'dist'
                    def renderDeployHook = 'https://api.render.com/deploy/srv-cqp3h788fa8c73c60l90?key=Dv23QVVpjko'  
                    bat """
                        curl -X POST ^
                        -F "publishDir=@${buildDir}/" ^
                        "${renderDeployHook}"
                    """
                }
            }
        }
  

      
    }
}