import { getDatabase, ref, set, onValue } from "firebase/database";

const dbRealtime = getDatabase(app);

const updateTypingStatus = (isTyping) => {
  const typingRef = ref(dbRealtime, "typingStatus");
  set(typingRef, { typing: isTyping });
};

const listenTypingStatus = () => {
  const typingRef = ref(dbRealtime, "typingStatus");
  onValue(typingRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Usuário está digitando:", data.typing);
  });
};

useEffect(() => {
  listenTypingStatus();
}, []);
