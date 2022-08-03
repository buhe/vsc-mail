import * as chai from 'chai';
import ImapFace from '../src/sdk/imap';
import { assert } from 'chai';
import { DISPLAY_KEY, IMAP_PORT_KEY, IMAP_SERVER_KEY, PASS_KEY, USER_KEY } from '../src/strategy';

describe('imap', () => {
    let imapFace: ImapFace;
    let imap: any;
    before(async function () {
        imapFace = new ImapFace({
            [IMAP_SERVER_KEY]: 'imap.126.com',
            [IMAP_PORT_KEY]: 993,
            [USER_KEY]: 'bugu1986@126.com',
            [PASS_KEY]: 'UMXTDSXKNLBRSSOB',
            [DISPLAY_KEY]: 'my126',
        });
        imap = await imapFace.connect();
    });
    after(function () {
        imap.end();
    });

    it('getBoxes',async () => {
        let b = await imap.getBoxesAsync();
        // console.log(b);
        assert(Object.keys(b.length > 0));
    })

    it('read selected mailbox', async () => {
        let mails = await imapFace.openMail('INBOX');
        // console.log(mails);
        assert(mails.length > 0);
    })
})