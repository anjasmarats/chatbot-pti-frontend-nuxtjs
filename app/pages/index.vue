<template>
  <div class="chat-bg">
    <div class="chat-container">
      <!-- Header -->
      <header class="chat-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg>
        <div>
          <h1 class="chat-title">AI Chatbot</h1>
          <p class="chat-desc">Selamat datang! Chatbot siap membantu Anda.</p>
        </div>
        <NuxtLink
          to="/analytics"
          class="dashboard-link"
          title="Review Dashboard Analytics & Feedback"
          aria-label="Review Dashboard Analytics & Feedback"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="10" rx="2" fill="#fff" opacity="0.18"/>
            <rect x="6" y="10" width="3" height="4" rx="1" fill="#fff"/>
            <rect x="10.5" y="8" width="3" height="6" rx="1" fill="#fff"/>
            <rect x="15" y="12" width="3" height="2" rx="1" fill="#fff"/>
            <circle cx="20" cy="6" r="2" fill="#ff5858"/>
            <circle cx="4" cy="6" r="2" fill="#43e97b"/>
          </svg>
          <span style="font-size: 0.98rem" class="text-light text-decoration-none">analisis</span>
        </NuxtLink>
      </header>

      <!-- Chat messages -->
      <main 
        class="chat-main" 
        ref="chatRef" 
        tabindex="0" 
        aria-label="Chat messages"
      >
        <div
          v-for="message in messages"
          :key="message.id"
          :class="`chat-bubble ${message.type}`"
          aria-live="polite"
        >
          <div class="bubble-header">
            <FaUserCircle v-if="message.type === 'user'" class="bubble-icon user" />
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg>
            <span class="bubble-sender">
              {{ message.type === 'user' ? 'Anda' : 'Bot' }}
            </span>
            <span class="bubble-time">{{ message.time }}</span>
          </div>
          <!-- <div class="bubble-text mb-2">{{ formatMessage(message.content || '') }}</div> -->
          <div class="bubble-text mb-2">{{ message.content }}</div>
          <div :class="`m-4 ${message.options ? '' : 'd-none'}`">
            <div v-if="message.options" class="message-options">
              <div
                v-for="option in message.options"
                :key="option.id"
                role="button"
                class="w-100 p-2 border-top border-bottom border-light"
                @click="handleOptionClick(option.id, option.text)"
                :disabled="isLoading"
              >
                {{ option.text }}
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="loading"
          class="chat-bubble bot"
          aria-live="polite"
        >
          <div class="bubble-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg>
            <span class="bubble-sender">Bot</span>
            <span class="bubble-time">&nbsp;</span>
          </div>
          <div class="bubble-text">Please Wait</div>
        </div>
      </main>

      <!-- Input form -->
      <form class="chat-input-form" @submit="handleSubmit" autocomplete="off">
        <button
          type="button"
          class="emoji-btn"
          tabindex="-1"
          aria-label="Emoji"
          title="Emoji"
          @click="addEmoji"
        >
          <FaRegSmile :size="22" />
        </button>
        <input
          class="feedback"
          type="text"
          placeholder="Silahkan berikan masukkan anda...."
          :value="inputMessage"
          @input="handleInputChange"
          aria-label="Ketik pesan"
        />
        <button
          class="send-btn"
          type="submit"
          aria-label="Kirim"
          :disabled="!inputMessage.trim()"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, defineComponent } from 'vue';

/* Lightweight inline icon components to avoid external dependency */
const makeIcon = (renderFn: (size: number, attrs: Record<string, any>) => any) =>
  defineComponent({
    props: { size: { type: Number, default: 24 } as any },
    setup(props, { attrs }) {
      return () => renderFn(props.size, attrs as Record<string, any>);
    }
  });

const FaRobot = makeIcon((size, attrs) =>
  h('svg', { ...attrs, width: size, height: size, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    [
      h('rect', { x: 4, y: 6, width: 16, height: 12, rx: 2, fill: 'currentColor', opacity: '0.1' }),
      h('rect', { x: 7, y: 9, width: 3, height: 4, rx: 1, fill: 'currentColor' }),
      h('rect', { x: 14, y: 9, width: 3, height: 4, rx: 1, fill: 'currentColor' }),
      h('rect', { x: 10.5, y: 8, width: 3, height: 6, rx: 1, fill: 'currentColor' })
    ]
  )
);

const FaUserCircle = makeIcon((size, attrs) =>
  h('svg', { ...attrs, width: size, height: size, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    [
      h('circle', { cx: 12, cy: 12, r: 10, stroke: 'currentColor', 'stroke-width': 1.5, fill: 'none' }),
      h('circle', { cx: 12, cy: 10, r: 3, fill: 'currentColor' }),
      h('path', { d: 'M6 18c1.5-2 4-3 6-3s4.5 1 6 3', stroke: 'currentColor', 'stroke-width': 1.2, fill: 'none', 'stroke-linecap': 'round' })
    ]
  )
);

const FaRegSmile = makeIcon((size, attrs) =>
  h('svg', { ...attrs, width: size, height: size, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    [
      h('circle', { cx: 12, cy: 12, r: 9, stroke: 'currentColor', 'stroke-width': 1.5, fill: 'none' }),
      h('path', { d: 'M8 14s1.5 2 4 2 4-2 4-2', stroke: 'currentColor', 'stroke-width': 1.2, 'stroke-linecap': 'round', fill: 'none' }),
      h('circle', { cx: 9, cy: 10, r: 0.8, fill: 'currentColor' }),
      h('circle', { cx: 15, cy: 10, r: 0.8, fill: 'currentColor' })
    ]
  )
);

// Types
interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  options?: Option[];
  requiresInput?: boolean;
  time?: string;
}

interface Option {
  id: string;
  text: string;
}

// Reactive state
const messages = ref<Message[]>([]);
const inputMessage = ref('');
const sessionId = ref<string | null>(null);
const isLoading = ref(false);
const waitingForInput = ref(false);
const loading = ref(false);
const chatRef = ref<HTMLElement | null>(null);

// Router
const router = useRouter();

// Auto-scroll hook
const useAutoScroll = (ref: Ref<HTMLElement | null>, deps: any[]) => {
  watch(deps, () => {
    if (ref.value) {
      ref.value.scrollTop = ref.value.scrollHeight;
    }
  });
};

// Apply auto-scroll
useAutoScroll(chatRef, [messages]);

// Generate session ID
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Scroll to bottom
const scrollToBottom = () => {
  const messagesEnd = document.querySelector('.messages-end');
  messagesEnd?.scrollIntoView({ behavior: 'smooth' });
};

watch(messages, () => {
  nextTick(() => {
    scrollToBottom();
  });
});

// Format message with line breaks
const formatMessage = (content: string) => {
  return content.split('\n').map((line, index) => (
    `<span key="${index}">${line}<br /></span>`
  )).join('');
};

// Handle link hover
const handleLinkHover = (event: Event, isHover: boolean) => {
  const target = event.currentTarget as HTMLElement;
  if (isHover) {
    target.style.background = 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)';
  } else {
    target.style.background = 'linear-gradient(90deg, #3a8dde 0%, #ff5858 100%)';
  }
};

// Handle input change
const handleInputChange = (event: Event) => {
  inputMessage.value = (event.target as HTMLInputElement).value;
};

// Add emoji
const addEmoji = () => {
  inputMessage.value += '😊';
};

// Handle option click
const handleOptionClick = (optionId: string, optionText: string) => {
  sendMessage(null, optionId, optionText);
};

// Handle form submit
const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (inputMessage.value.trim() && !isLoading.value) {
    sendMessage(inputMessage.value.trim());
  }
};

// Send message function
const sendMessage = async (message: string | null, optionId: string | null = null, optionText?: string) => {
  if (!sessionId.value) return;

  isLoading.value = true;

  try {
    loading.value = true;
    
    // Add user message to state
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: message || optionText || ''
    };
    messages.value = [...messages.value, userMessage];
    inputMessage.value = '';

    // Send to backend
    const { message:msg,options:opt } = await $fetch<{
      message: string;
      options?: Option[];
      requiresInput?: boolean;
    }>(`${url}/api/chat/message`, {
      method: 'POST',
      body: {
        sessionId: sessionId.value,
        feedback: message,
        optionId: optionId
      },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    // Add bot response to state
    const botMessage: Message = {
      id: Date.now() + 1,
      type: 'bot',
      content: msg,
      options: opt,
    };

    messages.value = [...messages.value, botMessage];
    loading.value = false;
  } catch (error) {
    console.error('Error sending message:', error);
    const errorMessage: Message = {
      id: Date.now() + 1,
      type: 'bot',
      content: 'Maaf, terjadi kesalahan. Silakan coba lagi.'
    };
    loading.value = false;
    messages.value = [...messages.value, errorMessage];
  } finally {
    isLoading.value = false;
  }
};

// Start chat session
onMounted(async () => {
  const startChat = async () => {
    // Check authentication (you'll need to implement this)
    // const cekauth = await auth();
    // if (!cekauth) {
    //   router.push('/login');
    //   return;
    // }

    const newSessionId = generateSessionId();
    sessionId.value = newSessionId;
    
    try {
      isLoading.value = true;
      const { message,options } = await $fetch<{
        message: string;
        options?: Option[];
      }>('/api/chat/start', {
        method: 'POST',
        body: {
          sessionId: newSessionId
        },
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      messages.value = [{
        id: Date.now(),
        type: 'bot',
        content: message,
        options: options
      }];
    } catch (error) {
      console.error('Error starting chat:', error);
      messages.value = [{
        id: Date.now(),
        type: 'bot',
        content: 'Maaf, terjadi kesalahan. Silakan refresh halaman.'
      }];
    } finally {
      isLoading.value = false;
    }
  };

  await startChat();
});
</script>

<style scoped>
    @import '~/assets/styles/index.css';
</style>