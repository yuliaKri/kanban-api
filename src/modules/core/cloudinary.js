const cloudinary = require('cloudinary');

const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: 'der0prs31',
  api_key: '896119133195875',
  api_secret: 'cloudinary',
});

exports.upload = (file, folder) => {
  return new Promise((resolve) => {
    cloudinary.upload(
      file,
      (result) => {
        resolve({
          url: result.url,
          id: result.public_id,
        });
      },
      {
        resource_type: 'auto',
        folder: folder,
      },
    );
  });
};
