pipeline {
  agent {
    node {
      label 'default'
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