import { serve } from '@hono/node-server';
import * as dotenv from 'dotenv';
import { Hono } from 'hono';
import mailRoutes from './mail/mail.routes';
import { cors } from 'hono/cors';

dotenv.config();

const app = new Hono();

app.use(cors());

app.route('/mail', mailRoutes);

const port = 8080;
console.log(`Server is running on port ${port}`);

serve({ fetch: app.fetch, port });
