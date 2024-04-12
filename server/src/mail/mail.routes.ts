import { Hono } from 'hono';
import { MailService } from './mail.service';

const router = new Hono();

const mailService = new MailService();

router.post('send-contact-details-to-owner', async (ctx) => {
  const body = await ctx.req.json();
  const result = await mailService.sendContactDetailsToOwner(body, body.email);
  return ctx.json(result);
});

export default router;
