import express from 'express';
import cors from 'cors';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';
import getApi from './api/api'

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

const secret = 'shhhhhhared-secret';

app.get('/token', function(req, res) {
	const data = {
		user: 'VladimirKu',
		name: 'Vladimir Ku',
	};
	return res.json(jwt.sign(data, secret));
});

app.get('/protected', expressJwt({secret}), function(req, res){
	return res.json(req.user);
});

resourse.signup = async function (req, res) {
	try {
		const userFields = resourse.getUserFields(req, res);
		const criteria = resourse.getUserCriteria (req, res);
		const exsistUser = await User.findOne(criteria); 
		if (exsistUser) return res.status(400).send('Пользователь с такой почтой или таким именем уже существует.');
		user = new User(userFields);
		await user.save();
		return res.json({
			signup: true,
			user,
			token: user.generateAuthToken();
		});
		
	}
	catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
}

const api = getApi({});
app.use('/api', api);


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});