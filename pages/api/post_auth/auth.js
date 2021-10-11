const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const instance = require('../../../src/instance');
const client = new OAuth2Client(process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID);

const signinProcess = (payload) => {
  const { sub, name, email } = payload;
  console.log(`id: ${sub}\n name:${name}\n, email:${email}`);
  const token = jwt.sign(
    {
      id: sub,
      name,
      email,
    },
    JWT_SECRET,
  );
  instance({
    method: 'POST',
    url: '/api/post_users/postUserToken',
    data: {
      id: sub,
      token,
    },
  });
};

const signupProcess = (payload) => {
  const { sub, name, email } = payload;
  console.log(`id: ${sub}\n name:${name}\n, email:${email}`);
  const token = jwt.sign(
    {
      id: sub,
      name,
      email,
    },
    JWT_SECRET,
  );
  instance({
    method: 'POST',
    url: '/api/post_users/postUser',
    data: {
      id: sub,
      name,
      email,
      token,
    },
  });
};

router.post('/', async (req, res) => {
  console.log('i am a sus');
  const verify = async () => {
    const ticket = await client.verifyIdToken({
      idToken: req.body.tokenid,
    });
    const payload = ticket.getPayload();
    const id = payload['sub'];

    const res = await instance.get(`/api/get_users/getUserById?id=${id}`);

    if (res.data) {
      // DB에 존재하는 유저
      token = signinProcess(payload);
    } else {
      // DB에 존재하지 않는 유저
      token = signupProcess(payload);
    }
  };

  verify()
    .then(() => {})
    .catch(console.error);
});

module.exports = router;
