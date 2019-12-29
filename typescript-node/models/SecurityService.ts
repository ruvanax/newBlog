const bcrypt = require('bcryptjs');


const saltRounds: number = 10;

export const hashPassword = (password: string) => bcrypt.hash(password, saltRounds);

export const comparePassword = (password: string, passwordHash: string) => bcrypt.compare(password, passwordHash);