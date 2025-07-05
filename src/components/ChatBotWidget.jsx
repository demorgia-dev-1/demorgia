import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Stack,
  Avatar,
  Chip,
  CircularProgress,
  MenuItem,
  Select,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const navigate = useNavigate();
  const chatRef = useRef(null);

  const [input, setInput] = useState("");
  const [collectedName, setCollectedName] = useState("");
  const [collectedEmail, setCollectedEmail] = useState("");
  const [collectingStage, setCollectingStage] = useState("name");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const initialSuggestions = [
    "How do I register?",
    "How to start my assessment?",
    "Where are my results?",
    "How can I become a client?",
  ];

  const relatedSuggestions = {
    register: ["Do I need to verify email?", "What details are required?"],
    assessment: ["Is it timed?", "Can I pause the test?"],
    result: ["When will I get results?", "Where can I check it?"],
    client: ["What services do you offer?", "How to partner with Demorgia?"],
  };

  const messagesMap = {
    greeting: {
      en: "What’s your name?",
      hi: "आपका नाम क्या है?",
      bn: "আপনার নাম কী?",
      ta: "உங்கள் பெயர் என்ன?",
      mr: "तुमचं नाव काय आहे?",
      gu: "તમારું નામ શું છે?",
      kn: "ನಿಮ್ಮ ಹೆಸರು ಏನು?",
      ml: "നിന്റെ പേര് എന്താണ്?",
      pa: "ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?",
      ur: "آپ کا نام کیا ہے؟",
    },
    emailPrompt: {
      en: (name) => `Nice to meet you, ${name}! 📧 Please share your email.`,
      hi: (name) => `मिलकर अच्छा लगा, ${name}! 📧 कृपया अपना ईमेल साझा करें।`,
      bn: (name) =>
        `আপনার সাথে দেখা করে ভালো লাগলো, ${name}! 📧 আপনার ইমেল দিন।`,
      ta: (name) =>
        `நீங்கள் சந்திப்பதில் மகிழ்ச்சி, ${name}! 📧 உங்கள் மின்னஞ்சல் முகவரியை பகிரவும்.`,
      mr: (name) =>
        `तुमची भेट आनंददायक होती, ${name}! 📧 कृपया तुमचा ईमेल शेअर करा.`,
      gu: (name) =>
        `તમને મળીને આનંદ થયો, ${name}! 📧 કૃપા કરીને તમારું ઇમેઇલ શેર કરો.`,
      kn: (name) =>
        `ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಗಿದೆ, ${name}! 📧 ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ಹಂಚಿಕೊಳ್ಳಿ.`,
      ml: (name) =>
        `നിനയെ കാണാനായത് സന്തോഷം, ${name}! 📧 നിങ്ങളുടെ ഇമെയിൽ പങ്കുവെക്കൂ.`,
      pa: (name) =>
        `ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਚੰਗਾ ਲੱਗਿਆ, ${name}! 📧 ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਈਮੇਲ ਸਾਂਝਾ ਕਰੋ।`,
      ur: (name) =>
        `آپ سے مل کر خوشی ہوئی، ${name}! 📧 براہ کرم اپنا ای میل شیئر کریں۔`,
    },
    invalidEmail: {
      en: "❌ That doesn't look like a valid email. Please try again.",
      hi: "❌ यह मान्य ईमेल नहीं लगता। कृपया दोबारा प्रयास करें।",
      bn: "❌ এটি বৈধ ইমেল নয়। আবার চেষ্টা করুন।",
      ta:
        "❌ இது செல்லுபடியாகும் மின்னஞ்சல் அல்ல. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
      mr: "❌ हे वैध ईमेल वाटत नाही. कृपया पुन्हा प्रयत्न करा.",
      gu: "❌ આ માન્ય ઇમેઇલ નથી લાગતું. કૃપા કરીને ફરી પ્રયત્ન કરો.",
      kn: "❌ ಇದು ಮಾನ್ಯ ಇಮೇಲ್ ಆಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      ml: "❌ ഇത് സാധുവായ ഇമെയിൽ പോലില്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
      pa: "❌ ਇਹ ਇੱਕ ਵੈਧ ਈਮੇਲ ਨਹੀਂ ਲੱਗਦੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      ur: "❌ یہ درست ای میل معلوم نہیں ہوتی۔ دوبارہ کوشش کریں۔",
    },
    ready: {
      en: (name) => `✅ Thanks, ${name}! How can I assist you today?`,
      hi: (name) => `✅ धन्यवाद, ${name}! मैं आपकी कैसे मदद कर सकता हूँ?`,
      bn: (name) => `✅ ধন্যবাদ, ${name}! আমি আপনাকে কীভাবে সাহায্য করতে পারি?`,
      ta: (name) => `✅ நன்றி, ${name}! நான் உங்களுக்கு இன்று எவ்வாறு உதவலாம்?`,
      mr: (name) => `✅ धन्यवाद, ${name}! मी तुम्हाला कशी मदत करू शकतो?`,
      gu: (name) =>
        `✅ 감사합니다, ${name}! હું આજે તમારી કેવી રીતે મદદ કરી શકું?`,
      kn: (name) => `✅ ಧನ್ಯವಾದಗಳು, ${name}! ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?`,
      ml: (name) => `✅ നന്ദി, ${name}! ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?`,
      pa: (name) => `✅ ਧੰਨਵਾਦ, ${name}! ਮੈਂ ਤੁਹਾਡੀ ਅੱਜ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?`,
      ur: (name) => `✅ شکریہ، ${name}! میں آج آپ کی کس طرح مدد کر سکتا ہوں؟`,
    },
    feedbackPrompt: {
      en: "Was this chat helpful?",
      hi: "क्या यह चैट सहायक थी?",
      bn: "এই চ্যাট কি সহায়ক ছিল?",
      ta: "இந்த உரையாடல் பயனுள்ளதாக இருந்ததா?",
      mr: "ही चॅट उपयुक्त ठरली का?",
      gu: "શું આ ચેટ મદદરૂપ રહી?",
      kn: "ಈ ಚಾಟ್ ಸಹಾಯಕವಾಗಿತ್ತಾ?",
      ml: "ഈ ചാറ്റ് ഉപകാരപ്രദമായിരുന്നോ?",
      pa: "ਕੀ ਇਹ ਚੈਟ ਲਾਭਦਾਇਕ ਸੀ?",
      ur: "کیا یہ چیٹ مددگار تھی؟",
    },
    feedbackYes: {
      en: "🙏 Thank you for your feedback!",
      hi: "🙏 आपकी प्रतिक्रिया के लिए धन्यवाद!",
      bn: "🙏 আপনার মতামতের জন্য ধন্যবাদ!",
      ta: "🙏 உங்கள் கருத்துக்கு நன்றி!",
      mr: "🙏 तुमच्या अभिप्रायाबद्दल धन्यवाद!",
      gu: "🙏 તમારા પ્રતિસાદ માટે આભાર!",
      kn: "🙏 ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗೆ ಧನ್ಯವಾದಗಳು!",
      ml: "🙏 നിങ്ങളുടെ അഭിപ്രായത്തിന് നന്ദി!",
      pa: "🙏 ਤੁਹਾਡੀ ਪ੍ਰਤੀਕਿਰਿਆ ਲਈ ਧੰਨਵਾਦ!",
      ur: "🙏 آپ کی رائے کا شکریہ!",
    },
    feedbackNo: {
      en: "😟 Sorry to hear that. We'll work on improving.",
      hi: "😟 खेद है कि यह सहायक नहीं थी। हम सुधार करेंगे।",
      bn: "😟 দুঃখিত, এটি সহায়ক ছিল না। আমরা উন্নতির চেষ্টা করব।",
      ta:
        "😟 இது பயனுள்ளதாக இல்லை என்று கேட்டு வருந்துகிறேன். நாங்கள் மேம்படுத்துவோம்.",
      mr: "😟 माफ करा, हे उपयुक्त नव्हते. आम्ही सुधार करू.",
      gu: "😟 દુઃખ છે કે આ ઉપયોગી નહોતું. અમે સુધારણા કરીશું.",
      kn:
        "😟 ಈ ಚಾಟ್ ಸಹಾಯಕವಾಗಿರಲಿಲ್ಲ ಎಂಬುದಕ್ಕೆ ವಿಷಾದ. ನಾವು ಸುಧಾರಣೆಯ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ.",
      ml: "😟 ഉപകാരപ്രദമായില്ല എന്ന് കേട്ട് ക്ഷമിക്കണം. നാം മെച്ചപ്പെടുത്തും.",
      pa:
        "😟 ਅਫ਼ਸੋਸ ਹੈ ਕਿ ਇਹ ਚੈਟ ਲਾਭਦਾਇਕ ਨਹੀਂ ਸੀ। ਅਸੀਂ ਸੁਧਾਰ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਾਂਗੇ।",
      ur: "😟 افسوس ہے کہ یہ چیٹ مددگار نہیں تھی۔ ہم بہتری کی کوشش کریں گے۔",
    },
  };

  const botReply = (msg) => {
    const text = msg.toLowerCase();
    if (text.includes("login") || text.includes("sign in"))
      return "Make sure your credentials are correct. You can reset your password if needed.";
    if (text.includes("register") || text.includes("signup"))
      return "Click the 'Sign Up' button and complete the form.";
    if (text.includes("start") && text.includes("assessment"))
      return "Go to your dashboard and click 'Start' next to your assigned test.";
    if (text.includes("rules") || text.includes("instructions"))
      return "Do not refresh or close the window during an assessment. Ensure a stable internet connection.";
    if (text.includes("result") || text.includes("score"))
      return "Results will be available on your dashboard within 24–48 hours.";
    if (text.includes("error") || text.includes("technical"))
      return "Please email support@demorgia.com with a screenshot of the issue.";
    if (text.includes("grievance"))
      return "Please email grievance@demorgia.com with your name, email, and issue details.";
    // Case 1: For general help/contact/support
    if (
      text.includes("contact") ||
      text.includes("help") ||
      text.includes("support")
    ) {
      setTimeout(() => {
        navigate("/", { state: { scrollTo: "contact" } });
      }, 1000);
      return "Redirecting you to our contact page... 📬";
    }

    // Case 2: For becoming a client
    if (text.includes("client") && text.includes("become")) {
      setTimeout(() => {
        navigate("/", { state: { scrollTo: "contact" } });
      }, 1000);
      return "Sure! We're redirecting you to our contact page to begin your journey with us.";
    }

    if (text.includes("services") && text.includes("client")) {
      return "We provide online assessments, hiring support, campus engagement, and learning services tailored to client needs.";
    }
    if (
      text.includes("partner") ||
      text.includes("business") ||
      text.includes("collaboration")
    ) {
      return "We'd love to partner with you. Send us your requirements at hrd@demorgia.com and our team will get in touch.";
    }
    return "I'm here to help with assessment and client-related queries. Could you rephrase your question?";
  };

  const getSuggestionKey = (text) => {
    const msg = text.toLowerCase();
    if (msg.includes("register")) return "register";
    if (msg.includes("assessment")) return "assessment";
    if (msg.includes("result")) return "result";
    if (msg.includes("client")) return "client";
    return null;
  };

  const handleSend = (text = input.trim()) => {
    if (!text) return;
    const userMsg = {
      from: "user",
      text,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      if (collectingStage === "name") {
        setCollectedName(text);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: messagesMap.emailPrompt[language](text),
            time: new Date().toLocaleTimeString(),
          },
        ]);
        setCollectingStage("email");
        setLoading(false);
        return;
      }
      if (collectingStage === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
        if (!isValidEmail) {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: messagesMap.invalidEmail[language],
              time: new Date().toLocaleTimeString(),
            },
          ]);
          setLoading(false);
          return;
        }
        setCollectedEmail(text);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: messagesMap.ready[language](collectedName),
            time: new Date().toLocaleTimeString(),
          },
        ]);
        setCollectingStage("done");
        setCurrentSuggestions(initialSuggestions);
        setLoading(false);
        return;
      }

      const replyText = botReply(text);
      const key = getSuggestionKey(text);
      setCurrentSuggestions(key ? relatedSuggestions[key] : []);

      const botMsg = {
        from: "bot",
        text: replyText,
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => {
        const updated = [...prev, botMsg];
        if (
          updated.filter((m) => m.from === "user").length >= 3 &&
          !feedbackGiven
        ) {
          setShowFeedback(true);
        }
        return updated;
      });
      setLoading(false);
    }, 1000);
  };

  const handleFeedback = (response) => {
    setMessages((prev) => [
      ...prev,
      {
        from: "bot",
        text:
          response === "yes"
            ? messagesMap.feedbackYes[language]
            : messagesMap.feedbackNo[language],
        time: new Date().toLocaleTimeString(),
      },
    ]);
    setFeedbackGiven(true);
    setShowFeedback(false);
  };

  useEffect(() => {
    if (messages.length === 0 && collectingStage === "name") {
      const hours = new Date().getHours();
      let greeting = "Hello";
      if (hours >= 5 && hours < 12) greeting = "Good Morning";
      else if (hours >= 12 && hours < 17) greeting = "Good Afternoon";
      else if (hours >= 17 && hours < 21) greeting = "Good Evening";
      else greeting = "Hello";

      setMessages([
        {
          from: "bot",
          text: `${greeting}! 😊 ${messagesMap.greeting[language]}`,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }
  }, [language]);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <Paper
      elevation={6}
      sx={{
        position: "fixed",
        bottom: 90,
        right: 20,
        width: 340,
        height: 500,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        zIndex: 9998,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: "#1976d2",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ flex: 1 }}>
          Chat Assistant
        </Typography>

        <Box sx={{ position: "relative", zIndex: 10000 }}>
          <Select
            variant="standard"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            disableUnderline
            sx={{
              color: "white",
              background: "transparent",
              minWidth: 70,
              ml: 1,
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
            MenuProps={{
              disablePortal: true,
              container: document.body,
              PaperProps: {
                sx: {
                  zIndex: 1302,
                  backgroundColor: "#0d47a1",
                  color: "white",
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "#1565c0",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#1565c0 !important",
                  },
                },
              },
            }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="hi">हिंदी</MenuItem>
            <MenuItem value="bn">বাংলা</MenuItem>
            <MenuItem value="ta">தமிழ்</MenuItem>
            <MenuItem value="mr">मराठी</MenuItem>
            <MenuItem value="gu">ગુજરાતી</MenuItem>
            <MenuItem value="kn">ಕನ್ನಡ</MenuItem>
            <MenuItem value="ml">മലയാളം</MenuItem>
            <MenuItem value="pa">ਪੰਜਾਬੀ</MenuItem>
            <MenuItem value="ur">اردو</MenuItem>
          </Select>
        </Box>

        {/* <TextField
          select
          variant="standard"
          SelectProps={{ native: true }}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          sx={{
            color: "white",
            background: "transparent",
            minWidth: 70,
            ml: 1,
            "& select": {
              color: "white",
              border: "none",
              background: "transparent",
              fontSize: "0.9rem",
              WebkitAppearance: "none",
              MozAppearance: "none",
            },
            "&::before, &::after": {
              borderBottom: "none !important",
            },
            "& .MuiInput-underline:before": {
              borderBottom: "none !important",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "none !important",
            },
          }}
        >
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
          <option value="bn">বাংলা</option>
          <option value="ta">தமிழ்</option>
          <option value="mr">मराठी</option>
          <option value="gu">ગુજરાતી</option>
          <option value="kn">ಕನ್ನಡ</option>
          <option value="ml">മലയാളം</option>
          <option value="pa">ਪੰਜਾਬੀ</option>
          <option value="ur">اردو</option>
        </TextField> */}
      </Box>

      <Box
        sx={{ flex: 1, p: 2, overflowY: "auto", backgroundColor: "#f9f9f9" }}
      >
        {messages.map((msg, i) => (
          <Stack
            key={i}
            direction="row"
            justifyContent={msg.from === "user" ? "flex-end" : "flex-start"}
            sx={{ mb: 1 }}
          >
            {msg.from === "bot" && (
              <Avatar sx={{ bgcolor: "#1976d2", width: 28, height: 28, mr: 1 }}>
                <SmartToyIcon fontSize="small" />
              </Avatar>
            )}
            <Box>
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: "220px",
                  bgcolor: msg.from === "user" ? "#1976d2" : "#e0e0e0",
                  color: msg.from === "user" ? "white" : "black",
                }}
              >
                {msg.text}
              </Box>
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem", color: "#777", mt: 0.3 }}
              >
                {msg.time}
              </Typography>
            </Box>
            {msg.from === "user" && (
              <Avatar sx={{ bgcolor: "#555", width: 28, height: 28, ml: 1 }}>
                <PersonIcon fontSize="small" />
              </Avatar>
            )}
          </Stack>
        ))}
        {loading && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <CircularProgress size={16} />
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic", color: "#555" }}
            >
              Typing...
            </Typography>
          </Stack>
        )}
        <div ref={chatRef} />
      </Box>

      {collectingStage === "done" && currentSuggestions.length > 0 && (
        <Box
          sx={{
            px: 1,
            py: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: 0.5,
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
            borderTop: "1px solid #ddd",
          }}
        >
          {currentSuggestions.map((s, i) => (
            <Chip
              key={i}
              label={s}
              size="small"
              onClick={() => handleSend(s)}
              variant="outlined"
              sx={{
                borderRadius: 2,
                fontSize: "0.75rem",
                cursor: "pointer",
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
            />
          ))}
        </Box>
      )}

      {showFeedback && !feedbackGiven && (
        <Box sx={{ p: 1, textAlign: "center", borderTop: "1px solid #ccc" }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {messagesMap.feedbackPrompt[language]}
          </Typography>
          <Box>
            <Chip
              label="👍 Yes"
              onClick={() => handleFeedback("yes")}
              sx={{ mr: 1 }}
            />
            <Chip label="👎 No" onClick={() => handleFeedback("no")} />
          </Box>
        </Box>
      )}

      <Box sx={{ display: "flex", p: 1, borderTop: "1px solid #ccc" }}>
        <TextField
          size="small"
          fullWidth
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <IconButton onClick={() => handleSend()} color="primary" sx={{ ml: 1 }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatBot;
