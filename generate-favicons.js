import { favicons } from 'favicons';
import fs from 'fs';
import path from 'path';

// Source SVG file
const source = 'public/favicon.svg';

// Configuration
const configuration = {
  path: '/icons', // Path for generated files
  appName: 'VP Portfolio',
  appShortName: 'VP',
  appDescription: 'Varun\'s Portfolio Website',
  background: '#0f172a',
  theme_color: '#5eead4',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: true,
    yandex: false,
  },
};

// Generate favicons
console.log('Generating favicons...');

try {
  const response = await favicons(source, configuration);

  // Create directory if it doesn't exist
  if (!fs.existsSync('public/icons')) {
    fs.mkdirSync('public/icons', { recursive: true });
  }

  // Save the files
  await Promise.all(response.images.map(image => {
    return fs.promises.writeFile(
      path.join('public', image.name), 
      image.contents
    );
  }));

  await Promise.all(response.files.map(file => {
    return fs.promises.writeFile(
      path.join('public', file.name), 
      file.contents
    );
  }));

  // Update index.html with the favicon links
  const html = response.html.join('\n');
  console.log('\nAdd the following to your index.html head section:');
  console.log(html);

  console.log('\nFavicons generated successfully!');
} catch (error) {
  console.error('Error generating favicons:', error);
}