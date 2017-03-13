 module.exports = function(grunt) {
   grunt.initConfig({
     pkg: grunt.file.readJSON("package.json"),

     imagemin: {
       dynamic: {
         files: [{
           expand: true,
           cwd: 'img/',
           src: ['**/*.{png,jpg,gif}'],
           dest: 'img-min/'
         }]
       }
     },

     uglify: {
       options: {
         manage: false
       },
       my_target: {
         files: [{
           'js/perfmatters.min.js' : ['js/perfmatters.js'],
           'views/js/main.min.js' : ['views/js/main.js']
         }]
       }
     },

     cssmin: {
       my_target: {
         files: [{
           expand: true,
           cwd: 'css/',
           src: ['*.css', '!*.min.css'],
           dest: 'css/',
           ext: '.min.css'
         }]
       }
     }
   });
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-cssmin'); // Run with grunt cssmin

 }
