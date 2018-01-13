module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'story',
      script    : __dirname + '/node_modules/nuxt/bin/nuxt',
      env: {
        COMMON_VARIABLE: 'true',
        "HOST": "0.0.0.0",
        "PORT": "3333"
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }

  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '39.104.67.13',
      ref  : 'origin/master',
      repo : 'git@github.com:WALLE729/story-of-time.git',
      path : '/var/www/story',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
