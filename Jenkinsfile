pipeline {
  agent {
    node {
      label 'asd'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''npm install
'''
        sh 'npm run dev'
      }
    }

  }
}