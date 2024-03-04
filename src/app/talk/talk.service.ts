import { Injectable } from '@angular/core';
import Talk from 'talkjs';
import { nanoid } from 'nanoid';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  private currentUser!: Talk.User;
  private userIdKey = 'talkjs_user_id';

  async createUser(applicationUser: any) {
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id,
      name: applicationUser.username,
      photoUrl: applicationUser.photoUrl,
      role: applicationUser.role,
    });
  }

  async createCurrentSession() {
    await Talk.ready;
    let userId = localStorage.getItem(this.userIdKey);
    if (!userId) {
      userId = nanoid();
      localStorage.setItem(this.userIdKey, userId);
    }

    const user = {
      id: userId,
      username: 'Client',
      email: 'alice@example.com',
      photoUrl: 'https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-customer-service-icon-png-image_4231136.png',
      welcomeMessage: 'Hey there! How are you? :-)',
      role: 'default',
    };
    this.currentUser = await this.createUser(user);
    const session = new Talk.Session({
      appId: environment.talkJsAppId,
      me: this.currentUser,
    });
    return session;
  }

  private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
    const otherUser = await this.createUser(otherApplicationUser);
    const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
    conversation.setParticipant(this.currentUser);
    conversation.setParticipant(otherUser);
    return conversation;
  }

  async createInbox(session: Talk.Session) {
    const otherApplicationUser = {
      id: 'owner',
      username: 'Zeshan',
      email: 'zeshanshakil0@gmail.com',
      photoUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPihihyMe_JBgsESkkRYh4kohcqbeJRqalF7782umdlxrlcObPUFmOX2onTP17e7ot8j-KYJREePmHGnujrkWtjnSsUttInlEWhFNzHMmfANMh0gxEy9cSi4oYIsh7WRtqFC3Td1B_esGQssW59uNG5kVZS_uRg2bjX_MZo-Ju86TeU6ybqrM87ap5ubM1KR2sjU9W1qUUMPpmcfyYCpHjEZ4nHRSdCPmuQ2Vywcvil8JASx2ZReMABPnoQsqhJomrfsMNFw-M2uQF_9O789hmVn5pwu5k3RtMZ0pwffAarA73u6Ga0VOqgeyTRgsY0zlwbdYSR8GeIz4GrJryxHVpaqHe4ShvHdCoqQ3-RaqsKA69Oj_SaEiC80d9uoeYEO82zVORD5eeic0z7qC-KXozNBYFO3hMLL_FvvBzB-08eP0rkLmIRs8tH9U4cPQZleQqnEXm1u0LNUo1W3rd_LHvhtcVsupsOpkVH8oLidtjhJm2yL4VF2_Kt36EIKkS79dinPkzScrD5STYc02azofCCecZFgSHGwr_dGsuHIUAQDV3DBxqxElyJ7AS9TZVoNRtmB1ES-IOfYFTEbul_cBITDAU09HNqgMgJmWwnVvFWMr1Q9auY9ITgmULmxoY0E09Sfl3Ya-mHJAUnjRa2LmQtsre8BQFiq0C41sgIkdrcHBOk24ZzCABEz5RIDpmiJiWAG1Av1zGz0t52d4gEJrYrE24k5m9vqmQbk24aWEF18uTp9rwS3gd19AXwoxA3gi7_KsxObT4izsasm88wbxWIlJNfcKUTzntCr53jVzkXd0igyxlCV67K2b8KIlW-djZu_RV1x6oEBCYwJWS6BesJaa3OsehJHqUpkuIlZ-wV7Po0qn3NLdDhv1xfRaUlLBxB8_jr_vMlvIVeSeIGx6aEVDM6K-H5mXJGK-gJjj1Up0u9cl7jUTTPbbaxjEYsrY8oDZtClvsy1Bw8JD_fIJTz2YvfGoSfu4dHNqWuhiO6gozrlGJx0WVYwWLz3Z_Lqn7Az3t7LgEHkorO2T_4B2E04f0l0zKvffg3srhsCQ=w1804-h1804-s-no-gm?authuser=0',
      welcomeMessage: 'Hey, how can I help?',
      role: 'default'
    };

    const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
    const inbox = session.createInbox();
    inbox.select(conversation);
    return inbox;
 }
}
