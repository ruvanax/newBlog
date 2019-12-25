const bcrypt = require('bcryptjs');


const saltRounds: number = 10;

export const hashPassword = (password: string) => bcrypt.hash(password, saltRounds);

// export const hashPassword = async (password: string) =>  {
//     try {
//         return await bcrypt.hash(password, saltRounds)
//     } catch(error) {
//         throw new Error(error);
//     }
// };

export const comparePassword = (password: string, passwordHash: string) => bcrypt.compare(password, passwordHash);