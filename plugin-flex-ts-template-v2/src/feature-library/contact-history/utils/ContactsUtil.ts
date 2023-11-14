import * as Flex from '@twilio/flex-ui';
import { useDispatch } from 'react-redux';

import { addContact, setContactList } from '../flex-hooks/state';
import { Contact } from '../types';
import { getMaxContacts } from '../config';

const ContactHistoryKey = 'CONTACT_HISTORY';

class ContactsUtil {
  getRecentContactsList(): Contact[] {
    const item = localStorage.getItem(ContactHistoryKey);
    if (item) {
      return JSON.parse(item);
    }
    return [];
  }

  initContactHistory = () => {
    // const dispatch = useDispatch();
    const contactList = this.getRecentContactsList();
    if (contactList && contactList.length > 0) {
      // dispatch(setContactList({ contactList }));
    }
  };

  setContactList = (contactList: Contact[]) => {
    localStorage.setItem(ContactHistoryKey, JSON.stringify(contactList));
  };

  addContact = (task: Flex.ITask) => {
    // const dispatch = useDispatch();
    const { taskChannelUniqueName: channel, sid: taskSid, queueName, age: duration } = task;
    const dateTime = task.dateCreated.toLocaleString('en-US');
    // Enable caller name number lookup on phone number to populate name
    const {
      direction,
      from,
      outbound_to,
      call_sid,
      caller,
      channelType,
      conversationSid,
      conversations,
      customerName,
    } = task.attributes;

    const outcome = task.attributes?.conversations?.outcome || 'Completed';

    const contact: Contact = {
      direction,
      channel,
      call_sid,
      dateTime,
      taskSid,
      queueName,
      duration,
      outcome,
      channelType,
      conversationSid,
    };
    contact.notes = conversations?.content;

    // Default
    contact.name = customerName || 'Customer';

    if (channel === 'voice') {
      contact.channelType = channel;
      if (caller) {
        contact.name = caller;
      }
      if (direction === 'inbound') {
        contact.phoneNumber = from;
      } else {
        contact.phoneNumber = outbound_to;
      }
    }

    // Using localStorage to persist contact list
    const contactList = this.getRecentContactsList();
    const newList = [contact].concat(contactList).slice(0, getMaxContacts());
    localStorage.setItem(ContactHistoryKey, JSON.stringify(newList));
    // Using Redux app state
    // dispatch(addContact({ contact }));
  };

  clearContactList = () => {
    localStorage.removeItem(ContactHistoryKey);
  };
}

const contactsUtil = new ContactsUtil();

export default contactsUtil;
