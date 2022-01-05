import {db} from "../services/firebase";

export function readChats() {
  var reads = [];
  db.ref("chats").on("value", snapshot => {
    snapshot.forEach(snap => {
      reads.push(snap.val())
    });
    return reads;
  });
}

export function writeChats(message) {
  return db.ref("chats").push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid
  });
}