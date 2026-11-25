// DZ_Messenger — Vanilla JS Chat App
// Bilingual (Arabic RTL / French LTR), 5 Wallpapers, Private Groups, WhatsApp-style Call UI

// ============ Icons (inline SVG) ============
const icons = {
  message: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  pencil: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>',
  users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  settings: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  logout: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
  arrowLeft: '<svg class="flip-rtl" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  phoneOff: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="22" x2="2" y1="2" y2="22"/></svg>',
  video: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>',
  videoOff: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"/><path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',
  mic: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',
  micOff: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',
  volume: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
  lock: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  more: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
  smile: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>',
  paperclip: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.234 20.252 21 12.3"/><path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"/></svg>',
  send: '<svg class="flip-rtl" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>',
  reply: '<svg class="flip-rtl" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>',
  trash: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  pencilSm: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>',
  check: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  checkCheck: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>',
  camera: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
  sun: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  moon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  globe: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  image: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  bell: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>',
  shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  userX: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/></svg>',
  key: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>',
  download: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
};

// ============ Wallpapers ============
const WALLPAPERS = [
  { id: 'default', file: null, fallback: 'var(--chat-bg)' },
  { id: 'bg1', file: 'bg1.jpg', fallback: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 'bg2', file: 'bg2.jpg', fallback: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { id: 'bg3', file: 'bg3.jpg', fallback: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)' },
  { id: 'bg4', file: 'bg4.jpg', fallback: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)' },
  { id: 'bg5', file: 'bg5.jpg', fallback: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
];

// ============ Translations (Arabic & French) ============
const i18n = {
  ar: {
    appName: 'DZ_Messenger',
    defaultBio: 'مرحباً! أنا أستخدم DZ_Messenger.',
    welcomeBack: 'مرحباً بعودتك',
    signInSub: 'سجّل الدخول لمتابعة المحادثات',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    signIn: 'تسجيل الدخول',
    newHere: 'جديد هنا؟',
    createAccount: 'إنشاء حساب',
    noAccountsYet: 'لا توجد حسابات بعد — أنشئ حسابك للبدء.',
    createYourAccount: 'أنشئ حسابك',
    joinSub: 'انضم إلى DZ_Messenger في ثوانٍ',
    displayName: 'الاسم الظاهر',
    passwordMinPlaceholder: '4 أحرف على الأقل',
    alreadyHaveAccount: 'لديك حساب بالفعل؟',
    accNotFound: 'الحساب غير موجود',
    wrongPassword: 'كلمة المرور غير صحيحة',
    welcomeToast: 'مرحباً بعودتك!',
    usernameMinErr: 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل',
    passwordMinErr: 'كلمة المرور يجب أن تكون 4 أحرف على الأقل',
    usernameTaken: 'اسم المستخدم مستخدم بالفعل',
    accountCreated: 'تم إنشاء الحساب بنجاح!',
    loggedOut: 'تم تسجيل الخروج',
    settings: 'الإعدادات',
    logout: 'تسجيل الخروج',
    searchChats: 'ابحث في المحادثات...',
    onlineNow: 'متصلون الآن',
    noChatsYet: 'لا توجد محادثات بعد.\nابدأ محادثة جديدة من الأسفل.',
    newGroup: 'مجموعة جديدة',
    newChat: 'محادثة جديدة',
    noMessagesPreview: 'لا توجد رسائل بعد',
    typing: 'يكتب الآن...',
    msgDeleted: 'تم حذف الرسالة',
    thisMsgDeleted: 'تم حذف هذه الرسالة',
    selectChat: 'اختر محادثة',
    selectChatSub: 'اختر محادثة من القائمة الجانبية أو ابدأ محادثة جديدة.',
    noMsgsSayHi: 'لا توجد رسائل بعد. قل مرحباً 👋',
    group: 'مجموعة',
    membersCount: '{n} أعضاء',
    unknown: 'غير معروف',
    online: 'متصل',
    offline: 'غير متصل',
    lastSeen: 'آخر ظهور {t}',
    justNow: 'الآن',
    mAgo: 'منذ {n} د',
    hAgo: 'منذ {n} س',
    dAgo: 'منذ {n} ي',
    today: 'اليوم',
    yesterday: 'أمس',
    weekdays: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    months: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    voiceCall: 'مكالمة صوتية',
    videoCall: 'مكالمة فيديو',
    more: 'المزيد',
    groupInfo: 'معلومات المجموعة',
    changeWallpaper: 'تغيير خلفية الدردشة',
    muteNotifs: 'كتم الإشعارات',
    muteSoon: 'ميزة الكتم قريباً',
    messagePlaceholder: 'اكتب رسالة...',
    editingPlaceholder: 'تعديل الرسالة... (اضغط Enter للحفظ)',
    emoji: 'إيموجي',
    attach: 'إرفاق ملف',
    send: 'إرسال',
    fileTooLarge: 'حجم الملف كبير جداً (الحد الأقصى 5MB)',
    imgTooLarge: 'حجم الصورة كبير جداً (الحد الأقصى 2MB)',
    reply: 'رد',
    edit: 'تعديل',
    delete: 'حذف',
    edited: 'معدّلة',
    replyTo: 'الرد على {name}',
    attachmentLabel: 'مرفق',
    startNewChat: 'بدء محادثة جديدة',
    searchPeople: 'ابحث عن أشخاص...',
    noOtherUsers: 'لا يوجد مستخدمون آخرون بعد. قم بتسجيل حساب آخر لتجربة الدردشة.',
    groupNamePlaceholder: 'اسم المجموعة',
    createGroupBtn: 'إنشاء المجموعة',
    cancel: 'إلغاء',
    giveGroupName: 'اكتب اسماً للمجموعة',
    addOneMember: 'أضف عضواً واحداً على الأقل',
    groupCreated: 'تم إنشاء المجموعة بنجاح',
    membersLabel: 'الأعضاء',
    youTag: '(أنت)',
    remove: 'إزالة',
    addMemberLabel: 'إضافة عضو',
    noUsersToAdd: 'لا يوجد مستخدمون لإضافتهم',
    add: 'إضافة',
    profile: 'الملف الشخصي',
    bio: 'النبذة',
    bioPlaceholder: 'أخبر الآخرين عن نفسك',
    saveChanges: 'حفظ التغييرات',
    photoUpdated: 'تم تحديث الصورة',
    usernameTooShort: 'اسم المستخدم قصير جداً',
    profileUpdated: 'تم تحديث الملف الشخصي',
    appearanceAndLang: 'المظهر واللغة',
    darkMode: 'الوضع الليلي',
    darkModeDesc: 'التبديل بين المظهر الفاتح والداكن',
    languageTitle: 'لغة التطبيق',
    languageDesc: 'اختر بين العربية والفرنسية',
    wallpapersTitle: 'خلفيات الدردشة',
    wallpapersDesc: 'اختر الخلفية التي تناسبك للمحادثات',
    wpDefault: 'الافتراضية',
    wpName: 'خلفية {n}',
    wpUpdated: 'تم تغيير خلفية الدردشة',
    notifications: 'الإشعارات',
    pushNotifs: 'إشعارات الرسائل',
    pushNotifsDesc: 'تلقي تنبيهات عند وصول رسائل جديدة',
    sounds: 'أصوات التطبيق',
    soundsDesc: 'تشغيل صوت عند وصول الرسائل',
    privacy: 'الخصوصية',
    readReceipts: 'مؤشرات القراءة',
    readReceiptsDesc: 'السماح للآخرين برؤية أنك قرأت رسائلهم',
    lastSeenVisible: 'إظهار آخر ظهور',
    lastSeenVisibleDesc: 'السماح للآخرين برؤية وقت نشاطك الأخير',
    blockedUsers: 'المستخدمون المحظورون',
    noBlockedUsers: 'لا يوجد مستخدمون محظورون.',
    unblock: 'إلغاء الحظر',
    blockSomeone: 'حظر مستخدم',
    block: 'حظر',
    changePassword: 'تغيير كلمة المرور',
    currentPw: 'كلمة المرور الحالية',
    newPw: 'كلمة المرور الجديدة',
    updatePw: 'تحديث كلمة المرور',
    fillBothFields: 'يرجى ملء الحقلين',
    oldPwWrong: 'كلمة المرور الحالية غير صحيحة',
    pwChanged: 'تم تغيير كلمة المرور',
    callEncrypted: 'مشفرة تماماً بين الطرفين',
    calling: 'جاري الاتصال...',
    ringing: 'يرن...',
    callEnded: 'انتهت المكالمة',
    cameraUnavailable: 'الكاميرا غير متاحة أو تم رفض الإذن',
  },
  fr: {
    appName: 'DZ_Messenger',
    defaultBio: 'Salut ! J’utilise DZ_Messenger.',
    welcomeBack: 'Bon retour',
    signInSub: 'Connectez-vous pour continuer à discuter',
    username: 'Nom d’utilisateur',
    password: 'Mot de passe',
    signIn: 'Se connecter',
    newHere: 'Nouveau ici ?',
    createAccount: 'Créer un compte',
    noAccountsYet: 'Aucun compte pour le moment — inscrivez-vous pour commencer.',
    createYourAccount: 'Créer votre compte',
    joinSub: 'Rejoignez DZ_Messenger en quelques secondes',
    displayName: 'Nom affiché',
    passwordMinPlaceholder: 'Au moins 4 caractères',
    alreadyHaveAccount: 'Vous avez déjà un compte ?',
    accNotFound: 'Compte introuvable',
    wrongPassword: 'Mot de passe incorrect',
    welcomeToast: 'Bon retour !',
    usernameMinErr: 'Le nom d’utilisateur doit contenir au moins 3 caractères',
    passwordMinErr: 'Le mot de passe doit contenir au moins 4 caractères',
    usernameTaken: 'Ce nom d’utilisateur est déjà pris',
    accountCreated: 'Compte créé avec succès !',
    loggedOut: 'Déconnecté',
    settings: 'Paramètres',
    logout: 'Déconnexion',
    searchChats: 'Rechercher des discussions...',
    onlineNow: 'En ligne',
    noChatsYet: 'Aucune discussion pour l’instant.\nDémarrez-en une ci-dessous.',
    newGroup: 'Nouveau groupe',
    newChat: 'Nouvelle discussion',
    noMessagesPreview: 'Aucun message',
    typing: 'écrit...',
    msgDeleted: 'Message supprimé',
    thisMsgDeleted: 'Ce message a été supprimé',
    selectChat: 'Sélectionnez une discussion',
    selectChatSub: 'Choisissez une conversation ou démarrez-en une nouvelle.',
    noMsgsSayHi: 'Aucun message pour l’instant. Dites bonjour 👋',
    group: 'Groupe',
    membersCount: '{n} membres',
    unknown: 'Inconnu',
    online: 'en ligne',
    offline: 'hors ligne',
    lastSeen: 'vu {t}',
    justNow: 'à l’instant',
    mAgo: 'il y a {n} min',
    hAgo: 'il y a {n} h',
    dAgo: 'il y a {n} j',
    today: 'Aujourd’hui',
    yesterday: 'Hier',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    voiceCall: 'Appel vocal',
    videoCall: 'Appel vidéo',
    more: 'Plus',
    groupInfo: 'Infos du groupe',
    changeWallpaper: 'Fond d’écran du chat',
    muteNotifs: 'Mettre en sourdine',
    muteSoon: 'Mode silencieux bientôt disponible',
    messagePlaceholder: 'Message...',
    editingPlaceholder: 'Modification... (Entrée pour enregistrer)',
    emoji: 'Émoji',
    attach: 'Joindre',
    send: 'Envoyer',
    fileTooLarge: 'Fichier trop volumineux (max 5 Mo)',
    imgTooLarge: 'Image trop volumineuse (max 2 Mo)',
    reply: 'Répondre',
    edit: 'Modifier',
    delete: 'Supprimer',
    edited: 'modifié',
    replyTo: 'Répondre à {name}',
    attachmentLabel: 'pièce jointe',
    startNewChat: 'Nouvelle discussion',
    searchPeople: 'Rechercher des personnes...',
    noOtherUsers: 'Aucun autre utilisateur pour le moment. Créez un second compte pour tester.',
    groupNamePlaceholder: 'Nom du groupe',
    createGroupBtn: 'Créer le groupe',
    cancel: 'Annuler',
    giveGroupName: 'Donnez un nom au groupe',
    addOneMember: 'Ajoutez au moins un membre',
    groupCreated: 'Groupe créé',
    membersLabel: 'Membres',
    youTag: '(vous)',
    remove: 'Retirer',
    addMemberLabel: 'Ajouter un membre',
    noUsersToAdd: 'Aucun utilisateur à ajouter',
    add: 'Ajouter',
    profile: 'Profil',
    bio: 'Bio',
    bioPlaceholder: 'Parlez un peu de vous',
    saveChanges: 'Enregistrer',
    photoUpdated: 'Photo mise à jour',
    usernameTooShort: 'Nom d’utilisateur trop court',
    profileUpdated: 'Profil mis à jour',
    appearanceAndLang: 'Apparence et langue',
    darkMode: 'Mode sombre',
    darkModeDesc: 'Basculer entre le thème clair et sombre',
    languageTitle: 'Langue',
    languageDesc: 'Choisir entre l’arabe et le français',
    wallpapersTitle: 'Fonds d’écran',
    wallpapersDesc: 'Choisissez votre arrière-plan de discussion',
    wpDefault: 'Par défaut',
    wpName: 'Fond {n}',
    wpUpdated: 'Fond d’écran mis à jour',
    notifications: 'Notifications',
    pushNotifs: 'Notifications',
    pushNotifsDesc: 'Recevoir des alertes pour les nouveaux messages',
    sounds: 'Sons intégrés',
    soundsDesc: 'Jouer un son lors de nouveaux messages',
    privacy: 'Confidentialité',
    readReceipts: 'Confirmations de lecture',
    readReceiptsDesc: 'Permettre aux autres de voir quand vous lisez leurs messages',
    lastSeenVisible: 'Afficher dernière présence',
    lastSeenVisibleDesc: 'Permettre aux autres de voir votre dernière activité',
    blockedUsers: 'Utilisateurs bloqués',
    noBlockedUsers: 'Aucun utilisateur bloqué.',
    unblock: 'Débloquer',
    blockSomeone: 'Bloquer quelqu’un',
    block: 'Bloquer',
    changePassword: 'Changer le mot de passe',
    currentPw: 'Mot de passe actuel',
    newPw: 'Nouveau mot de passe',
    updatePw: 'Mettre à jour',
    fillBothFields: 'Veuillez remplir les deux champs',
    oldPwWrong: 'Ancien mot de passe incorrect',
    pwChanged: 'Mot de passe modifié',
    callEncrypted: 'Chiffré de bout en bout',
    calling: 'Appel en cours...',
    ringing: 'Sonne...',
    callEnded: 'Appel terminé',
    cameraUnavailable: 'Caméra indisponible ou permission refusée',
  }
};

function detectDeviceLang() {
  const nav = (navigator.language || (navigator.languages && navigator.languages[0]) || 'fr').toLowerCase();
  return nav.startsWith('ar') ? 'ar' : 'fr';
}

function getLang() {
  return state?.settings?.language === 'ar' ? 'ar' : 'fr';
}

function t(key, vars = {}) {
  const dict = i18n[getLang()] || i18n.fr;
  let str = dict[key] ?? i18n.fr[key] ?? key;
  for (const [k, v] of Object.entries(vars)) {
    str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return str;
}

// ============ Storage ============
const STORAGE_KEY = 'dz-messenger-v1';

const defaultSettings = () => ({
  theme: 'light',
  language: detectDeviceLang(),
  wallpaper: 'default',
  notifications: true,
  sounds: true,
  readReceipts: true,
  lastSeenVisible: true,
});

function avatarUrl(seed) {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}`;
}

let state;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      state = JSON.parse(raw);
      state.users ||= [];
      state.chats ||= [];
      state.messages ||= [];
      state.accounts ||= [];
      state.blocked ||= [];
      state.settings = { ...defaultSettings(), ...(state.settings || {}) };
      if (!['ar', 'fr'].includes(state.settings.language)) {
        state.settings.language = detectDeviceLang();
      }
      state.activeChatId ||= null;
      state.currentUserId ||= null;
      return;
    }
  } catch (e) { console.error(e); }
  state = {
    accounts: [],
    currentUserId: null,
    users: [],
    chats: [],
    messages: [],
    blocked: [],
    activeChatId: null,
    settings: defaultSettings(),
  };
}

function saveState() {
  const clone = { ...state, chats: state.chats.map(c => { const { typing, ...rest } = c; return rest; }) };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(clone)); } catch (e) { console.error(e); }
}

// ============ Helpers ============
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function uid(prefix = 'm') { return prefix + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7); }
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }
function nl2br(s) { return escapeHtml(s).replace(/\n/g, '<br>'); }

function userById(id) { return state.users.find(u => u.id === id); }
function currentUser() { return userById(state.currentUserId); }
function chatById(id) {
  const c = state.chats.find(x => x.id === id);
  if (!c || !c.memberIds.includes(state.currentUserId)) return null;
  return c;
}
function messagesForChat(id) {
  return state.messages.filter(m => m.chatId === id).sort((a, b) => a.createdAt - b.createdAt);
}
function lastMessage(chatId) {
  const arr = messagesForChat(chatId);
  return arr[arr.length - 1];
}
function unreadCount(chatId) {
  return state.messages.filter(m => m.chatId === chatId && m.senderId !== state.currentUserId && m.status !== 'seen').length;
}
function chatDisplay(chat) {
  if (chat.type === 'group') {
    return {
      name: chat.name || t('group'),
      avatar: chat.avatar || `https://api.dicebear.com/7.x/shapes/svg?seed=${chat.id}`,
      subtitle: t('membersCount', { n: chat.memberIds.length }),
    };
  }
  const otherId = chat.memberIds.find(id => id !== state.currentUserId);
  const other = userById(otherId);
  return {
    name: other?.name || t('unknown'),
    avatar: other?.avatar || '',
    subtitle: other?.online ? t('online') : t('lastSeen', { t: formatLastSeen(other?.lastSeen) }),
    isOnline: other?.online,
    other,
  };
}

// ============ Time formatting ============
function pad(n) { return n < 10 ? '0' + n : n; }
function formatTime(ts) {
  const d = new Date(ts);
  return pad(d.getHours()) + ':' + pad(d.getMinutes());
}
function isToday(ts) {
  const d = new Date(ts), n = new Date();
  return d.toDateString() === n.toDateString();
}
function isYesterday(ts) {
  const d = new Date(ts), n = new Date(); n.setDate(n.getDate() - 1);
  return d.toDateString() === n.toDateString();
}
function formatChatListTime(ts) {
  const d = new Date(ts);
  if (isToday(ts)) return formatTime(ts);
  if (isYesterday(ts)) return t('yesterday');
  const diff = (Date.now() - ts) / (24 * 3600 * 1000);
  if (diff < 7) return i18n[getLang()].weekdays[d.getDay()];
  return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + String(d.getFullYear()).slice(2);
}
function formatDateSeparator(ts) {
  if (isToday(ts)) return t('today');
  if (isYesterday(ts)) return t('yesterday');
  const d = new Date(ts);
  return d.getDate() + ' ' + i18n[getLang()].months[d.getMonth()] + ' ' + d.getFullYear();
}
function formatLastSeen(ts) {
  if (!ts) return t('offline');
  const m = Math.floor((Date.now() - ts) / 60000);
  if (m < 1) return t('justNow');
  if (m < 60) return t('mAgo', { n: m });
  if (m < 1440) return t('hAgo', { n: Math.floor(m / 60) });
  return t('dAgo', { n: Math.floor(m / 1440) });
}
function shouldShowDateSep(prev, current) {
  if (!prev) return true;
  return new Date(prev).toDateString() !== new Date(current).toDateString();
}

// ============ Toast ============
function toast(msg, type = 'info') {
  const c = $('#toast-container');
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  c.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2400);
  setTimeout(() => el.remove(), 2800);
}

// ============ Brand Icon & Avatar ============
function logoHTML(sizeClass = '') {
  return `
    <div class="logo ${sizeClass}">
      <div class="badge">
        <img src="icon.png" alt="${t('appName')}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <span style="display:none;align-items:center;justify-content:center">${icons.message}</span>
      </div>
      <span>${t('appName')}</span>
    </div>`;
}

function avatarHTML(src, name, size = 40, online = false) {
  const initials = escapeHtml((name || '?').split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase());
  const dot = online ? `<span class="dot"></span>` : '';
  if (src) {
    return `<div class="avatar" style="width:${size}px;height:${size}px">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(name || '')}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
      <div class="initials" style="display:none">${initials}</div>
      ${dot}
    </div>`;
  }
  return `<div class="avatar" style="width:${size}px;height:${size}px"><div class="initials">${initials}</div>${dot}</div>`;
}

function langPillHTML() {
  const lang = getLang();
  return `
    <div class="lang-pill" role="group" aria-label="Language">
      <button type="button" data-set-lang="ar" class="${lang === 'ar' ? 'active' : ''}">العربية</button>
      <button type="button" data-set-lang="fr" class="${lang === 'fr' ? 'active' : ''}">Français</button>
    </div>`;
}

function attachLangSwitchers(root = document) {
  $$('[data-set-lang]', root).forEach(btn => {
    btn.addEventListener('click', () => {
      state.settings.language = btn.dataset.setLang;
      applyLanguage();
      saveState();
      rerender();
    });
  });
}

// ============ Apply theme & language ============
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.settings.theme);
}

function applyLanguage() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// ============ Router / Render ============
let currentView = null;
function navigate(view) {
  currentView = view;
  if (view === 'login') return renderLogin();
  if (view === 'signup') return renderSignup();
  if (view === 'settings') return renderSettings();
  return renderApp();
}

function rerender() {
  navigate(currentView || 'app');
}

// ============ Auth views ============
function renderLogin() {
  const root = $('#app');
  root.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-lang">${langPillHTML()}</div>
        <div class="auth-logo">${logoHTML('lg')}</div>
        <h1>${t('welcomeBack')}</h1>
        <p class="sub">${t('signInSub')}</p>
        <form id="login-form">
          <div class="field">
            <label for="username">${t('username')}</label>
            <input class="input" id="username" placeholder="amine" autocomplete="username" required />
          </div>
          <div class="field">
            <label for="password">${t('password')}</label>
            <input class="input" id="password" type="password" placeholder="••••••••" autocomplete="current-password" required />
          </div>
          <button type="submit" class="btn glow full">${t('signIn')}</button>
        </form>
        <p class="muted center-text mt-6" style="font-size:13px">
          ${t('newHere')} <a href="#" id="to-signup">${t('createAccount')}</a>
        </p>
        ${state.accounts.length === 0 ? `<p class="muted center-text mt-4" style="font-size:12px">${t('noAccountsYet')}</p>` : ''}
      </div>
    </div>`;
  attachLangSwitchers(root);
  $('#login-form').addEventListener('submit', e => {
    e.preventDefault();
    const u = $('#username').value.trim().toLowerCase();
    const p = $('#password').value;
    const acc = state.accounts.find(a => a.username === u);
    if (!acc) return toast(t('accNotFound'), 'error');
    if (acc.password !== p) return toast(t('wrongPassword'), 'error');
    state.currentUserId = acc.userId;
    const me = currentUser();
    if (me) me.online = true;
    saveState();
    toast(t('welcomeToast'), 'success');
    navigate('app');
  });
  $('#to-signup').addEventListener('click', e => { e.preventDefault(); navigate('signup'); });
}

function renderSignup() {
  const root = $('#app');
  root.innerHTML = `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-lang">${langPillHTML()}</div>
        <div class="auth-logo">${logoHTML('lg')}</div>
        <h1>${t('createYourAccount')}</h1>
        <p class="sub">${t('joinSub')}</p>
        <form id="signup-form">
          <div class="field">
            <label for="name">${t('displayName')}</label>
            <input class="input" id="name" placeholder="Amine" required />
          </div>
          <div class="field">
            <label for="username">${t('username')}</label>
            <input class="input" id="username" placeholder="amine" required />
          </div>
          <div class="field">
            <label for="password">${t('password')}</label>
            <input class="input" id="password" type="password" placeholder="${t('passwordMinPlaceholder')}" required />
          </div>
          <button type="submit" class="btn glow full">${t('createAccount')}</button>
        </form>
        <p class="muted center-text mt-6" style="font-size:13px">
          ${t('alreadyHaveAccount')} <a href="#" id="to-login">${t('signIn')}</a>
        </p>
      </div>
    </div>`;
  attachLangSwitchers(root);
  $('#signup-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#name').value.trim();
    const u = $('#username').value.trim().toLowerCase();
    const p = $('#password').value;
    if (u.length < 3) return toast(t('usernameMinErr'), 'error');
    if (p.length < 4) return toast(t('passwordMinErr'), 'error');
    if (state.accounts.some(a => a.username === u)) return toast(t('usernameTaken'), 'error');

    const id = uid('u');
    state.users.push({
      id,
      username: u,
      name: name || u,
      avatar: avatarUrl(u),
      bio: t('defaultBio'),
      online: true,
      lastSeen: Date.now(),
    });
    state.accounts.push({ username: u, password: p, userId: id });
    state.currentUserId = id;
    saveState();
    toast(t('accountCreated'), 'success');
    navigate('app');
  });
  $('#to-login').addEventListener('click', e => { e.preventDefault(); navigate('login'); });
}

// ============ Main app ============
let replyToId = null;
let pendingAttachment = null;
let editingId = null;
let emojiPickerEl = null;
let openMenu = null;

function cleanupFloatingUI() {
  if (emojiPickerEl) { emojiPickerEl.remove(); emojiPickerEl = null; }
  if (openMenu) { openMenu.remove(); openMenu = null; }
}

function renderApp() {
  if (!state.currentUserId) return navigate('login');

  // Preserve active draft & cursor position across rerenders
  const prevInput = $('#msg-input');
  const draftState = prevInput ? {
    value: prevInput.value,
    focused: document.activeElement === prevInput,
    start: prevInput.selectionStart,
    end: prevInput.selectionEnd,
    chatId: state.activeChatId,
  } : null;

  const prevSearch = $('#chat-search')?.value || '';

  cleanupFloatingUI();

  const root = $('#app');
  const me = currentUser();
  const myChats = state.chats
    .filter(c => c.memberIds.includes(state.currentUserId))
    .sort((a, b) => (lastMessage(b.id)?.createdAt || b.createdAt) - (lastMessage(a.id)?.createdAt || a.createdAt));

  const onlineUsers = state.users.filter(u => u.id !== state.currentUserId && u.online);

  const wp = WALLPAPERS.find(w => w.id === state.settings.wallpaper) || WALLPAPERS[0];
  const wpStyle = wp.file
    ? `background-image: url('${wp.file}'), ${wp.fallback};`
    : '';

  root.innerHTML = `
    <div class="app-shell ${state.activeChatId ? 'has-active' : ''}" id="app-shell">
      <aside class="sidebar">
        <div class="sb-header">
          ${logoHTML('sm')}
          <div class="actions">
            <button class="btn icon" id="open-settings" title="${t('settings')}">${icons.settings}</button>
            <button class="btn icon" id="logout-btn" title="${t('logout')}">${icons.logout}</button>
          </div>
        </div>
        <div class="sb-search ${prevSearch ? 'has-text' : ''}">
          <div class="wrap">
            <span class="ico">${icons.search}</span>
            <input id="chat-search" placeholder="${t('searchChats')}" value="${escapeHtml(prevSearch)}" />
            <button class="clear" id="clear-search">${icons.x}</button>
          </div>
        </div>
        ${onlineUsers.length ? `
          <div class="sb-section-label">${t('onlineNow')}</div>
          <div class="online-strip scroll-thin">
            ${onlineUsers.map(u => `
              <button class="online-bubble" data-user-id="${u.id}" title="${escapeHtml(u.name)}">
                ${avatarHTML(u.avatar, u.name, 44, true)}
                <span>${escapeHtml(u.name.split(' ')[0])}</span>
              </button>`).join('')}
          </div>` : ''}
        <div class="chat-list scroll-thin" id="chat-list">
          ${myChats.length === 0 ? `<div class="empty">${nl2br(t('noChatsYet'))}</div>` :
            myChats.map(c => renderChatItem(c)).join('')}
        </div>
        <div class="sb-footer">
          <button class="me" id="open-settings-2">
            ${avatarHTML(me?.avatar, me?.name, 36)}
            <div class="info">
              <div class="name">${escapeHtml(me?.name || '')}</div>
              <div class="uname">@${escapeHtml(me?.username || '')}</div>
            </div>
          </button>
          <button class="btn icon" id="new-group-btn" title="${t('newGroup')}">${icons.users}</button>
          <button class="btn icon primary" id="new-chat-btn" title="${t('newChat')}">${icons.pencil}</button>
        </div>
      </aside>
      <section class="chat-area ${wp.file ? 'has-wallpaper' : ''}" id="chat-area" style="${wpStyle}">${renderChatArea()}</section>
    </div>
  `;

  attachAppHandlers();

  if (prevSearch) {
    $('#chat-search').dispatchEvent(new Event('input'));
  }

  // Restore message draft and focus
  const newInput = $('#msg-input');
  if (newInput && draftState && draftState.chatId === state.activeChatId) {
    newInput.value = draftState.value;
    newInput.style.height = 'auto';
    newInput.style.height = Math.min(newInput.scrollHeight, 120) + 'px';
    if (draftState.focused) {
      newInput.focus();
      try { newInput.setSelectionRange(draftState.start, draftState.end); } catch {}
    }
  }

  scrollMessagesToBottom();
}

function renderChatItem(c) {
  const d = chatDisplay(c);
  const last = lastMessage(c.id);
  const unread = unreadCount(c.id);
  const active = c.id === state.activeChatId;
  const typing = (c.typing || []).length > 0;
  let preview = t('noMessagesPreview');
  if (typing) preview = t('typing');
  else if (last?.deleted) preview = t('msgDeleted');
  else if (last?.attachment) preview = '📎 ' + last.attachment.name;
  else if (last?.text) preview = last.text;
  return `
    <button class="chat-item ${active ? 'active' : ''}" data-chat-id="${c.id}">
      ${avatarHTML(d.avatar, d.name, 48, d.isOnline)}
      <div class="info">
        <div class="top">
          <span class="name">${escapeHtml(d.name)}</span>
          ${last ? `<span class="meta">${formatChatListTime(last.createdAt)}</span>` : ''}
        </div>
        <div class="bottom">
          <span class="last">${escapeHtml(preview)}</span>
          ${unread > 0 && !active ? `<span class="unread-badge">${unread}</span>` : ''}
        </div>
      </div>
    </button>`;
}

function renderChatArea() {
  const chat = state.activeChatId ? chatById(state.activeChatId) : null;
  if (!chat) {
    return `
      <div class="empty-state">
        <div class="inner">
          <div class="icon-circle">
            <img src="icon.png" alt="${t('appName')}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
            <span style="display:none;align-items:center;justify-content:center">${icons.message}</span>
          </div>
          <h2>${t('selectChat')}</h2>
          <p>${t('selectChatSub')}</p>
        </div>
      </div>`;
  }
  const d = chatDisplay(chat);
  const isTyping = (chat.typing || []).length > 0;
  const msgs = messagesForChat(chat.id);

  let messagesHtml = '';
  if (msgs.length === 0) {
    messagesHtml = `<div class="empty" style="text-align:center;color:var(--muted-fg);margin-top:48px;font-size:13px">${t('noMsgsSayHi')}</div>`;
  } else {
    let prevTs;
    let prevSenderId;
    for (const m of msgs) {
      if (shouldShowDateSep(prevTs, m.createdAt)) {
        messagesHtml += `<div class="date-sep"><span>${formatDateSeparator(m.createdAt)}</span></div>`;
        prevSenderId = null;
      }
      const showSender = chat.type === 'group' && m.senderId !== prevSenderId;
      messagesHtml += renderMessage(m, showSender);
      prevTs = m.createdAt;
      prevSenderId = m.senderId;
    }
  }
  if (isTyping) {
    messagesHtml += `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
  }

  return `
    <header class="chat-header">
      <button class="btn icon back-btn" id="back-btn">${icons.arrowLeft}</button>
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0;cursor:${chat.type === 'group' ? 'pointer' : 'default'}" id="chat-header-info">
        ${avatarHTML(d.avatar, d.name, 42, d.isOnline)}
        <div class="info">
          <div class="name">${escapeHtml(d.name)}</div>
          <div class="status ${isTyping ? 'typing' : ''}">${escapeHtml(isTyping ? t('typing') : d.subtitle)}</div>
        </div>
      </div>
      <div class="actions">
        <button class="btn icon" id="call-voice" title="${t('voiceCall')}">${icons.phone}</button>
        <button class="btn icon" id="call-video" title="${t('videoCall')}">${icons.video}</button>
        <button class="btn icon" id="chat-more" title="${t('more')}">${icons.more}</button>
      </div>
    </header>
    <div class="messages scroll-thin" id="messages">${messagesHtml}</div>
    <div class="composer" id="composer">
      <div id="reply-preview-slot"></div>
      <div id="attachment-preview-slot"></div>
      <div class="row" style="position:relative">
        <button class="btn icon" id="emoji-btn" title="${t('emoji')}">${icons.smile}</button>
        <button class="btn icon" id="attach-btn" title="${t('attach')}">${icons.paperclip}</button>
        <input type="file" id="attach-input" accept="*/*" hidden />
        <textarea id="msg-input" placeholder="${editingId ? t('editingPlaceholder') : t('messagePlaceholder')}" rows="1"></textarea>
        <button class="btn icon primary" id="send-btn" title="${t('send')}">${icons.send}</button>
      </div>
    </div>
  `;
}

function renderMessage(m, showSender) {
  const isMine = m.senderId === state.currentUserId;
  const sender = userById(m.senderId);
  const replied = m.replyTo ? state.messages.find(x => x.id === m.replyTo) : null;
  const repliedSender = replied ? userById(replied.senderId) : null;

  let bubbleInner = '';
  if (replied) {
    const what = replied.deleted ? t('msgDeleted') : (replied.text || (replied.attachment ? '📎 ' + t('attachmentLabel') : ''));
    bubbleInner += `<div class="reply-quote"><div class="who">${escapeHtml(repliedSender?.name || '')}</div><div class="what">${escapeHtml(what)}</div></div>`;
  }
  if (m.deleted) {
    bubbleInner += `<em>${t('thisMsgDeleted')}</em>`;
  } else {
    if (m.attachment?.type === 'image') {
      bubbleInner += `<img class="attachment" src="${escapeHtml(m.attachment.url)}" alt="${escapeHtml(m.attachment.name)}" />`;
    } else if (m.attachment?.type === 'file') {
      bubbleInner += `<a class="file-att" href="${escapeHtml(m.attachment.url)}" download="${escapeHtml(m.attachment.name)}">${icons.download}<span>${escapeHtml(m.attachment.name)}</span></a>`;
    }
    if (m.text) bubbleInner += `<div>${nl2br(m.text)}</div>`;
  }

  let ticks = '';
  if (isMine && !m.deleted) {
    if (m.status === 'sent') ticks = `<span class="ticks">${icons.check}</span>`;
    else if (m.status === 'delivered') ticks = `<span class="ticks">${icons.checkCheck}</span>`;
    else if (m.status === 'seen') ticks = `<span class="ticks seen">${icons.checkCheck}</span>`;
  }
  const editedTag = (m.editedAt && !m.deleted) ? `<span>${t('edited')}</span>` : '';

  bubbleInner += `<div class="meta">${editedTag}<span>${formatTime(m.createdAt)}</span>${ticks}</div>`;

  const senderHTML = showSender && !isMine ? `<div class="sender-name">${escapeHtml(sender?.name || '')}</div>` : '';
  const gutter = !isMine && showSender
    ? avatarHTML(sender?.avatar, sender?.name, 28)
    : (!isMine ? '<div class="gutter"></div>' : '');

  const actionsBtn = !m.deleted ? `<button class="msg-action-btn" data-msg-action="${m.id}">${icons.more}</button>` : '';

  return `
    <div class="msg-row ${isMine ? 'sent' : 'recv'}" data-msg-id="${m.id}">
      ${!isMine ? gutter : ''}
      <div class="msg-content">
        ${senderHTML}
        <div class="msg-actions-wrap">
          ${isMine ? actionsBtn : ''}
          <div class="bubble ${m.deleted ? 'deleted' : ''}">${bubbleInner}</div>
          ${!isMine ? actionsBtn : ''}
        </div>
      </div>
    </div>
  `;
}

// ============ App handlers ============
function attachAppHandlers() {
  $('#open-settings').addEventListener('click', () => navigate('settings'));
  $('#open-settings-2').addEventListener('click', () => navigate('settings'));
  $('#logout-btn').addEventListener('click', () => {
    const me = currentUser();
    if (me) { me.online = false; me.lastSeen = Date.now(); }
    state.currentUserId = null;
    state.activeChatId = null;
    saveState();
    toast(t('loggedOut'), 'success');
    navigate('login');
  });
  $('#new-chat-btn').addEventListener('click', openNewChatModal);
  $('#new-group-btn').addEventListener('click', openNewGroupModal);

  const search = $('#chat-search');
  const clear = $('#clear-search');
  search.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    e.target.parentElement.parentElement.classList.toggle('has-text', !!q);
    $$('#chat-list .chat-item').forEach(el => {
      const name = el.querySelector('.name').textContent.toLowerCase();
      el.style.display = name.includes(q) ? '' : 'none';
    });
  });
  clear.addEventListener('click', () => { search.value = ''; search.dispatchEvent(new Event('input')); search.focus(); });

  $$('.chat-item').forEach(el => {
    el.addEventListener('click', () => {
      state.activeChatId = el.dataset.chatId;
      state.messages.forEach(m => {
        if (m.chatId === state.activeChatId && m.senderId !== state.currentUserId) m.status = 'seen';
      });
      replyToId = null; pendingAttachment = null; editingId = null;
      saveState(); rerender();
    });
  });

  $$('.online-bubble').forEach(b => {
    b.addEventListener('click', () => {
      const otherId = b.dataset.userId;
      const existing = state.chats.find(c => c.type === 'dm' && c.memberIds.includes(state.currentUserId) && c.memberIds.includes(otherId));
      if (existing) state.activeChatId = existing.id;
      else {
        const id = uid('c');
        state.chats.unshift({ id, type: 'dm', memberIds: [state.currentUserId, otherId], createdAt: Date.now() });
        state.activeChatId = id;
      }
      saveState(); rerender();
    });
  });

  if (state.activeChatId && chatById(state.activeChatId)) {
    const back = $('#back-btn');
    if (back) back.addEventListener('click', () => { state.activeChatId = null; saveState(); rerender(); });
    $('#call-voice').addEventListener('click', () => startCall('voice'));
    $('#call-video').addEventListener('click', () => startCall('video'));
    $('#chat-more').addEventListener('click', e => {
      e.stopPropagation();
      const chat = chatById(state.activeChatId);
      const items = [];
      if (chat.type === 'group') items.push({ label: t('groupInfo'), onClick: () => openGroupInfoModal(chat.id) });
      items.push({ label: t('changeWallpaper'), icon: icons.image, onClick: openWallpaperModal });
      items.push({ label: t('muteNotifs'), onClick: () => toast(t('muteSoon'), 'info') });
      const side = getLang() === 'ar' ? 'left' : 'right';
      showMenu(e.currentTarget, items, side);
    });
    const headerInfo = $('#chat-header-info');
    headerInfo.addEventListener('click', () => {
      const chat = chatById(state.activeChatId);
      if (chat?.type === 'group') openGroupInfoModal(chat.id);
    });

    const input = $('#msg-input');
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
    $('#send-btn').addEventListener('click', sendMessage);
    $('#attach-btn').addEventListener('click', () => $('#attach-input').click());
    $('#attach-input').addEventListener('change', e => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) { toast(t('fileTooLarge'), 'error'); return; }
      const reader = new FileReader();
      reader.onload = () => {
        pendingAttachment = {
          type: file.type.startsWith('image/') ? 'image' : 'file',
          url: reader.result, name: file.name, size: file.size,
        };
        renderAttachmentPreview();
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    });
    $('#emoji-btn').addEventListener('click', e => { e.stopPropagation(); toggleEmojiPicker(); });

    $$('.msg-action-btn').forEach(b => {
      b.addEventListener('click', e => {
        e.stopPropagation();
        const id = b.dataset.msgAction;
        const m = state.messages.find(x => x.id === id);
        if (!m) return;
        const isMine = m.senderId === state.currentUserId;
        const items = [{ label: t('reply'), icon: icons.reply, onClick: () => { replyToId = id; renderReplyPreview(); $('#msg-input').focus(); } }];
        if (isMine && m.text) items.push({ label: t('edit'), icon: icons.pencilSm, onClick: () => startEditing(id) });
        if (isMine) items.push({ label: t('delete'), icon: icons.trash, danger: true, onClick: () => { m.deleted = true; m.text = undefined; m.attachment = undefined; saveState(); rerender(); } });
        const side = isMine ? 'left' : 'right';
        showMenu(b, items, side);
      });
    });

    renderReplyPreview();
    renderAttachmentPreview();
  }
}

function scrollMessagesToBottom() {
  const c = $('#messages'); if (c) c.scrollTop = c.scrollHeight;
}

function renderReplyPreview() {
  const slot = $('#reply-preview-slot'); if (!slot) return;
  if (!replyToId) { slot.innerHTML = ''; return; }
  const m = state.messages.find(x => x.id === replyToId);
  if (!m) { slot.innerHTML = ''; return; }
  const sender = userById(m.senderId);
  const what = m.text || (m.attachment ? '📎 ' + t('attachmentLabel') : '');
  slot.innerHTML = `
    <div class="reply-preview">
      <div class="bar"></div>
      <div class="info">
        <div class="who">${escapeHtml(t('replyTo', { name: sender?.name || '' }))}</div>
        <div class="what">${escapeHtml(what)}</div>
      </div>
      <button class="btn icon" id="cancel-reply">${icons.x}</button>
    </div>`;
  $('#cancel-reply').addEventListener('click', () => { replyToId = null; renderReplyPreview(); });
}

function renderAttachmentPreview() {
  const slot = $('#attachment-preview-slot'); if (!slot) return;
  if (!pendingAttachment) { slot.innerHTML = ''; return; }
  slot.innerHTML = `
    <div class="attachment-preview">
      ${pendingAttachment.type === 'image' ? `<img src="${escapeHtml(pendingAttachment.url)}" alt="" />` : `<span style="padding:0 4px">${icons.paperclip}</span>`}
      <div class="info"><div class="name">${escapeHtml(pendingAttachment.name)}</div></div>
      <button class="btn icon" id="cancel-att">${icons.x}</button>
    </div>`;
  $('#cancel-att').addEventListener('click', () => { pendingAttachment = null; renderAttachmentPreview(); });
}

function sendMessage() {
  const input = $('#msg-input');
  const text = input.value.trim();
  if (editingId) {
    const m = state.messages.find(x => x.id === editingId);
    if (m && text) { m.text = text; m.editedAt = Date.now(); }
    editingId = null;
    input.value = ''; input.placeholder = t('messagePlaceholder');
    saveState(); rerender(); return;
  }
  if (!text && !pendingAttachment) return;
  const msg = {
    id: uid('m'),
    chatId: state.activeChatId,
    senderId: state.currentUserId,
    text: text || undefined,
    attachment: pendingAttachment || undefined,
    replyTo: replyToId || undefined,
    createdAt: Date.now(),
    status: 'sent',
  };
  state.messages.push(msg);
  input.value = ''; input.style.height = 'auto';
  pendingAttachment = null; replyToId = null;
  saveState(); rerender();
}

function startEditing(id) {
  const m = state.messages.find(x => x.id === id); if (!m) return;
  editingId = id;
  const input = $('#msg-input');
  input.value = m.text || '';
  input.placeholder = t('editingPlaceholder');
  input.focus();
}

// ============ WhatsApp-style Voice & Video Call ============
async function startCall(type) {
  const chat = chatById(state.activeChatId);
  if (!chat) return;
  const d = chatDisplay(chat);

  let stream = null;
  let muted = false;
  let speaker = false;
  let camOn = type === 'video';
  let seconds = 0;
  let timerInterval = null;

  const overlay = document.createElement('div');
  overlay.className = 'call-overlay';
  overlay.innerHTML = `
    <div class="call-video-remote"></div>
    ${type === 'video' ? `
      <div class="call-video-local" id="call-local-box">
        <video id="call-local-video" autoplay playsinline muted></video>
      </div>` : ''}
    <div class="call-top">
      <div class="call-encrypted">${icons.lock}<span>${t('callEncrypted')}</span></div>
      <div class="call-avatar-ring">${avatarHTML(d.avatar, d.name, 104)}</div>
      <div class="call-name">${escapeHtml(d.name)}</div>
      <div class="call-status" id="call-status">${t('calling')}</div>
    </div>
    <div class="call-controls">
      <button class="call-btn" id="call-speaker" title="Speaker">${icons.volume}</button>
      ${type === 'video' ? `<button class="call-btn" id="call-cam" title="Camera">${icons.video}</button>` : ''}
      <button class="call-btn" id="call-mic" title="Mic">${icons.mic}</button>
      <button class="call-btn end" id="call-end" title="End">${icons.phoneOff}</button>
    </div>
  `;
  document.body.appendChild(overlay);

  const statusEl = $('#call-status', overlay);
  const t1 = setTimeout(() => { if (overlay.isConnected) statusEl.textContent = t('ringing'); }, 1200);
  const t2 = setTimeout(() => {
    if (!overlay.isConnected) return;
    timerInterval = setInterval(() => {
      seconds++;
      statusEl.textContent = pad(Math.floor(seconds / 60)) + ':' + pad(seconds % 60);
    }, 1000);
    statusEl.textContent = '00:00';
  }, 3000);

  if (type === 'video') {
    try {
      if (navigator.mediaDevices?.getUserMedia) {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        const vid = $('#call-local-video', overlay);
        if (vid && overlay.isConnected) vid.srcObject = stream;
      } else {
        throw new Error('No mediaDevices');
      }
    } catch {
      camOn = false;
      const box = $('#call-local-box', overlay);
      if (box) box.style.display = 'none';
      const camBtn = $('#call-cam', overlay);
      if (camBtn) { camBtn.classList.add('active'); camBtn.innerHTML = icons.videoOff; }
      toast(t('cameraUnavailable'), 'info');
    }
  }

  $('#call-mic', overlay).addEventListener('click', e => {
    muted = !muted;
    e.currentTarget.classList.toggle('active', muted);
    e.currentTarget.innerHTML = muted ? icons.micOff : icons.mic;
  });

  $('#call-speaker', overlay).addEventListener('click', e => {
    speaker = !speaker;
    e.currentTarget.classList.toggle('active', speaker);
  });

  const camBtn = $('#call-cam', overlay);
  if (camBtn) {
    camBtn.addEventListener('click', () => {
      if (!stream) return toast(t('cameraUnavailable'), 'info');
      camOn = !camOn;
      stream.getVideoTracks().forEach(tr => { tr.enabled = camOn; });
      camBtn.classList.toggle('active', !camOn);
      camBtn.innerHTML = camOn ? icons.video : icons.videoOff;
      const box = $('#call-local-box', overlay);
      if (box) box.style.opacity = camOn ? '1' : '0.25';
    });
  }

  $('#call-end', overlay).addEventListener('click', () => {
    clearTimeout(t1);
    clearTimeout(t2);
    clearInterval(timerInterval);
    if (stream) stream.getTracks().forEach(tr => tr.stop());
    overlay.remove();
    toast(t('callEnded'), 'info');
  });
}

// ============ Emoji picker ============
const emojiList = ['😀','😃','😄','😁','😆','🥹','😅','😂','🤣','😊','😇','🙂','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥸','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🫢','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👍','👎','👏','🙌','🙏','🫶','👋','🤝','💪','🔥','✨','🎉','🎊','❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','💯','💢','💥','💫','💦','💨','🕳️','💣','💬'];

function toggleEmojiPicker() {
  if (emojiPickerEl) { emojiPickerEl.remove(); emojiPickerEl = null; return; }
  emojiPickerEl = document.createElement('div');
  emojiPickerEl.className = 'emoji-picker scroll-thin';
  emojiPickerEl.innerHTML = emojiList.map(e => `<button type="button" data-emoji="${e}">${e}</button>`).join('');
  $('#composer .row').appendChild(emojiPickerEl);
  emojiPickerEl.addEventListener('click', e => {
    if (e.target.dataset.emoji) {
      const input = $('#msg-input');
      input.value += e.target.dataset.emoji;
      input.focus();
    }
  });
  setTimeout(() => document.addEventListener('click', closePickerOnce), 0);
}
function closePickerOnce(e) {
  if (emojiPickerEl && !emojiPickerEl.contains(e.target) && e.target.closest('#emoji-btn') == null) {
    emojiPickerEl.remove(); emojiPickerEl = null;
    document.removeEventListener('click', closePickerOnce);
  }
}

// ============ Menus ============
function showMenu(anchor, items, side = 'right') {
  if (openMenu) { openMenu.remove(); openMenu = null; }
  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.innerHTML = items.map((it, i) => `<button type="button" data-i="${i}" class="${it.danger ? 'danger' : ''}">${it.icon || ''}<span>${escapeHtml(it.label)}</span></button>`).join('');
  document.body.appendChild(menu);
  const r = anchor.getBoundingClientRect();
  const mw = menu.offsetWidth;
  let left = side === 'right' ? r.right - mw : r.left;
  left = Math.max(8, Math.min(left, window.innerWidth - mw - 8));
  let top = r.bottom + 4;
  if (top + menu.offsetHeight > window.innerHeight - 8) top = r.top - menu.offsetHeight - 4;
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';
  menu.addEventListener('click', e => {
    const idx = e.target.closest('button')?.dataset.i;
    if (idx != null) { items[idx].onClick(); menu.remove(); openMenu = null; }
  });
  openMenu = menu;
  setTimeout(() => document.addEventListener('click', closeMenuOnce), 0);
}
function closeMenuOnce(e) {
  if (openMenu && !openMenu.contains(e.target)) {
    openMenu.remove(); openMenu = null;
    document.removeEventListener('click', closeMenuOnce);
  }
}

// ============ Wallpapers Grid Helper ============
function wallpaperGridHTML() {
  return `
    <div class="wp-grid">
      ${WALLPAPERS.map((w, idx) => {
        const active = state.settings.wallpaper === w.id;
        const label = w.id === 'default' ? t('wpDefault') : t('wpName', { n: idx });
        const bg = w.file ? `background-image: url('${w.file}'), ${w.fallback};` : `background: ${w.fallback};`;
        return `
          <button type="button" class="wp-card ${active ? 'active' : ''}" data-wp="${w.id}" style="${bg}">
            ${active ? `<span class="wp-check">${icons.check}</span>` : ''}
            <span class="wp-label">${escapeHtml(label)}</span>
          </button>`;
      }).join('')}
    </div>`;
}

// ============ Modals ============
function openModal(html) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `<div class="modal scroll-thin">${html}</div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  return overlay;
}

function openWallpaperModal() {
  const overlay = openModal(`
    <h2>${t('wallpapersTitle')}</h2>
    <p class="muted" style="font-size:13px;margin:0 0 12px">${t('wallpapersDesc')}</p>
    ${wallpaperGridHTML()}
    <div class="actions">
      <button type="button" class="btn ghost" id="wp-close">${t('cancel')}</button>
    </div>
  `);
  overlay.querySelector('#wp-close').addEventListener('click', () => overlay.remove());
  overlay.querySelectorAll('[data-wp]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.settings.wallpaper = btn.dataset.wp;
      saveState();
      overlay.remove();
      toast(t('wpUpdated'), 'success');
      rerender();
    });
  });
}

function openNewChatModal() {
  const others = state.users.filter(u => u.id !== state.currentUserId);
  const overlay = openModal(`
    <h2>${t('startNewChat')}</h2>
    <div class="modal-search-wrap">
      <span class="ico">${icons.search}</span>
      <input class="input" id="m-search" placeholder="${t('searchPeople')}" />
    </div>
    <div id="m-list" class="scroll-thin" style="max-height:340px;overflow-y:auto">
      ${others.length === 0
        ? `<p class="muted center-text" style="font-size:13px;padding:24px 8px;line-height:1.6">${t('noOtherUsers')}</p>`
        : others.map(u => `
        <div class="user-row" data-uid="${u.id}">
          ${avatarHTML(u.avatar, u.name, 40, u.online)}
          <div class="info">
            <div class="name" style="font-size:14px;font-weight:500">${escapeHtml(u.name)}</div>
            <div class="uname">@${escapeHtml(u.username)}</div>
          </div>
        </div>`).join('')}
    </div>
  `);
  const search = overlay.querySelector('#m-search');
  search.addEventListener('input', () => {
    const q = search.value.toLowerCase();
    overlay.querySelectorAll('.user-row').forEach(r => {
      r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
  overlay.querySelectorAll('.user-row').forEach(r => {
    r.addEventListener('click', () => {
      const otherId = r.dataset.uid;
      const existing = state.chats.find(c => c.type === 'dm' && c.memberIds.includes(state.currentUserId) && c.memberIds.includes(otherId));
      if (existing) state.activeChatId = existing.id;
      else {
        const id = uid('c');
        state.chats.unshift({ id, type: 'dm', memberIds: [state.currentUserId, otherId], createdAt: Date.now() });
        state.activeChatId = id;
      }
      overlay.remove();
      saveState(); rerender();
    });
  });
}

function openNewGroupModal() {
  const others = state.users.filter(u => u.id !== state.currentUserId);
  const selected = new Set();
  const overlay = openModal(`
    <h2>${t('newGroup')}</h2>
    <div class="field"><input class="input" id="g-name" placeholder="${t('groupNamePlaceholder')}" /></div>
    <div id="g-list" class="scroll-thin" style="max-height:280px;overflow-y:auto">
      ${others.length === 0
        ? `<p class="muted center-text" style="font-size:13px;padding:20px 8px;line-height:1.6">${t('noOtherUsers')}</p>`
        : others.map(u => `
        <div class="user-row" data-uid="${u.id}">
          <div class="checkbox" data-cb="${u.id}"></div>
          ${avatarHTML(u.avatar, u.name, 36, u.online)}
          <div class="info">
            <div class="name" style="font-size:14px;font-weight:500">${escapeHtml(u.name)}</div>
            <div class="uname">@${escapeHtml(u.username)}</div>
          </div>
        </div>`).join('')}
    </div>
    <div class="actions">
      <button type="button" class="btn ghost" id="g-cancel">${t('cancel')}</button>
      <button type="button" class="btn glow" id="g-create">${t('createGroupBtn')}</button>
    </div>
  `);
  overlay.querySelectorAll('.user-row').forEach(r => {
    r.addEventListener('click', () => {
      const id = r.dataset.uid;
      const cb = r.querySelector('.checkbox');
      if (selected.has(id)) { selected.delete(id); cb.classList.remove('checked'); cb.innerHTML = ''; }
      else { selected.add(id); cb.classList.add('checked'); cb.innerHTML = icons.check; }
    });
  });
  overlay.querySelector('#g-cancel').addEventListener('click', () => overlay.remove());
  overlay.querySelector('#g-create').addEventListener('click', () => {
    const name = overlay.querySelector('#g-name').value.trim();
    if (!name) return toast(t('giveGroupName'), 'error');
    if (selected.size === 0) return toast(t('addOneMember'), 'error');
    const id = uid('g');
    state.chats.unshift({
      id, type: 'group', name,
      avatar: `https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(name)}`,
      memberIds: [state.currentUserId, ...selected],
      createdAt: Date.now(),
    });
    state.activeChatId = id;
    overlay.remove();
    saveState(); rerender();
    toast(t('groupCreated'), 'success');
  });
}

function openGroupInfoModal(chatId) {
  const chat = chatById(chatId); if (!chat) return;
  const renderInner = () => {
    const members = chat.memberIds.map(userById).filter(Boolean);
    const candidates = state.users.filter(u => !chat.memberIds.includes(u.id));
    return `
      <h2 style="display:flex;align-items:center;gap:12px">
        ${avatarHTML(chat.avatar, chat.name, 48)}
        <div>
          <div>${escapeHtml(chat.name)}</div>
          <div style="font-size:12px;font-weight:400;color:var(--muted-fg)">${t('membersCount', { n: chat.memberIds.length })}</div>
        </div>
      </h2>
      <div style="margin-top:12px">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted-fg);font-weight:600;margin-bottom:6px">${t('membersLabel')}</div>
        <div class="scroll-thin" style="max-height:180px;overflow-y:auto">
          ${members.map(m => `
            <div class="user-row">
              ${avatarHTML(m.avatar, m.name, 36, m.online)}
              <div class="info">
                <div style="font-size:14px;font-weight:500">${escapeHtml(m.name)} ${m.id === state.currentUserId ? `<span class="muted" style="font-size:12px">${t('youTag')}</span>` : ''}</div>
                <div class="uname">@${escapeHtml(m.username)}</div>
              </div>
              ${m.id !== state.currentUserId ? `<button class="btn icon" data-remove="${m.id}" title="${t('remove')}" style="color:var(--danger)">${icons.x}</button>` : ''}
            </div>`).join('')}
        </div>
      </div>
      <div style="margin-top:16px">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted-fg);font-weight:600;margin-bottom:6px">${t('addMemberLabel')}</div>
        <div class="scroll-thin" style="max-height:160px;overflow-y:auto">
          ${candidates.length === 0 ? `<p class="muted center-text" style="font-size:12px;padding:8px 0">${t('noUsersToAdd')}</p>` :
            candidates.map(u => `
              <div class="user-row">
                ${avatarHTML(u.avatar, u.name, 36, u.online)}
                <div class="info">
                  <div style="font-size:14px;font-weight:500">${escapeHtml(u.name)}</div>
                  <div class="uname">@${escapeHtml(u.username)}</div>
                </div>
                <button class="btn ghost" data-add="${u.id}">${t('add')}</button>
              </div>`).join('')}
        </div>
      </div>
    `;
  };

  const overlay = openModal(renderInner());
  const wireEvents = () => {
    overlay.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => {
      const targetId = b.dataset.remove;
      chat.memberIds = chat.memberIds.filter(x => x !== targetId);
      saveState();
      overlay.querySelector('.modal').innerHTML = renderInner();
      wireEvents();
      rerender();
    }));
    overlay.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => {
      const targetId = b.dataset.add;
      if (!chat.memberIds.includes(targetId)) chat.memberIds.push(targetId);
      saveState();
      overlay.querySelector('.modal').innerHTML = renderInner();
      wireEvents();
      rerender();
    }));
  };
  wireEvents();
}

// ============ Settings ============
function renderSettings() {
  if (!state.currentUserId) return navigate('login');
  cleanupFloatingUI();
  const me = currentUser();
  const blocked = state.blocked.map(userById).filter(Boolean);
  const blockable = state.users.filter(u => u.id !== state.currentUserId && !state.blocked.includes(u.id));

  $('#app').innerHTML = `
    <div class="settings-page">
      <div class="settings-container">
        <div class="settings-header">
          <button class="btn icon" id="back-home">${icons.arrowLeft}</button>
          <h1>${t('settings')}</h1>
        </div>

        <section class="settings-card">
          <h2>${t('profile')}</h2>
          <div class="profile-top">
            <div class="avatar-wrap">
              ${avatarHTML(me.avatar, me.name, 72)}
              <button class="change-photo" id="change-photo">${icons.camera}</button>
              <input type="file" id="avatar-input" accept="image/*" hidden />
            </div>
            <div>
              <div style="font-weight:600">${escapeHtml(me.name)}</div>
              <div class="muted" style="font-size:13px">@${escapeHtml(me.username)}</div>
            </div>
          </div>
          <div class="fields-grid">
            <div class="field"><label>${t('displayName')}</label><input class="input" id="p-name" value="${escapeHtml(me.name)}" /></div>
            <div class="field"><label>${t('username')}</label><input class="input" id="p-username" value="${escapeHtml(me.username)}" /></div>
            <div class="field full"><label>${t('bio')}</label><textarea class="textarea" id="p-bio" rows="3" placeholder="${t('bioPlaceholder')}">${escapeHtml(me.bio || '')}</textarea></div>
          </div>
          <div style="display:flex;justify-content:flex-end;margin-top:16px">
            <button class="btn glow" id="save-profile">${t('saveChanges')}</button>
          </div>
        </section>

        <section class="settings-card">
          <h2>${t('appearanceAndLang')}</h2>
          ${settingRow(state.settings.theme === 'dark' ? icons.moon : icons.sun, t('darkMode'), t('darkModeDesc'), toggleSwitchHTML('theme', state.settings.theme === 'dark'))}
          ${settingRow(icons.globe, t('languageTitle'), t('languageDesc'), langPillHTML())}
        </section>

        <section class="settings-card">
          <h2 style="display:flex;align-items:center;gap:8px">${icons.image} ${t('wallpapersTitle')}</h2>
          <p class="muted" style="font-size:13px;margin:0 0 12px">${t('wallpapersDesc')}</p>
          ${wallpaperGridHTML()}
        </section>

        <section class="settings-card">
          <h2>${t('notifications')}</h2>
          ${settingRow(icons.bell, t('pushNotifs'), t('pushNotifsDesc'), toggleSwitchHTML('notifications', state.settings.notifications))}
          ${settingRow(icons.bell, t('sounds'), t('soundsDesc'), toggleSwitchHTML('sounds', state.settings.sounds))}
        </section>

        <section class="settings-card">
          <h2>${t('privacy')}</h2>
          ${settingRow(icons.shield, t('readReceipts'), t('readReceiptsDesc'), toggleSwitchHTML('readReceipts', state.settings.readReceipts))}
          ${settingRow(icons.shield, t('lastSeenVisible'), t('lastSeenVisibleDesc'), toggleSwitchHTML('lastSeenVisible', state.settings.lastSeenVisible))}
        </section>

        <section class="settings-card">
          <h2 style="display:flex;align-items:center;gap:8px">${icons.userX} ${t('blockedUsers')}</h2>
          ${blocked.length === 0 ? `<p class="muted" style="font-size:13px;margin:0">${t('noBlockedUsers')}</p>` :
            blocked.map(u => `
              <div class="user-row">
                ${avatarHTML(u.avatar, u.name, 36)}
                <div class="info"><div style="font-size:14px;font-weight:500">${escapeHtml(u.name)}</div><div class="uname">@${escapeHtml(u.username)}</div></div>
                <button class="btn ghost" data-unblock="${u.id}">${t('unblock')}</button>
              </div>`).join('')}
          ${blockable.length > 0 ? `
          <details style="margin-top:12px">
            <summary style="cursor:pointer;color:var(--primary);font-size:13px">${t('blockSomeone')}</summary>
            <div style="margin-top:8px;max-height:180px;overflow-y:auto" class="scroll-thin">
              ${blockable.map(u => `
                <div class="user-row">
                  ${avatarHTML(u.avatar, u.name, 32)}
                  <div class="info" style="font-size:13px">${escapeHtml(u.name)}</div>
                  <button class="btn ghost" data-block="${u.id}">${t('block')}</button>
                </div>`).join('')}
            </div>
          </details>` : ''}
        </section>

        <section class="settings-card">
          <h2 style="display:flex;align-items:center;gap:8px">${icons.key} ${t('changePassword')}</h2>
          <div class="fields-grid">
            <div class="field"><label>${t('currentPw')}</label><input class="input" type="password" id="old-pw" /></div>
            <div class="field"><label>${t('newPw')}</label><input class="input" type="password" id="new-pw" /></div>
          </div>
          <div style="display:flex;justify-content:flex-end;margin-top:16px"><button class="btn" id="change-pw">${t('updatePw')}</button></div>
        </section>

        <section class="settings-card">
          <button class="btn danger" id="logout-2">${icons.logout}<span>${t('logout')}</span></button>
        </section>
      </div>
    </div>
  `;

  attachLangSwitchers($('#app'));

  $('#back-home').addEventListener('click', () => navigate('app'));
  $('#change-photo').addEventListener('click', () => $('#avatar-input').click());
  $('#avatar-input').addEventListener('change', e => {
    const f = e.target.files?.[0]; if (!f) return;
    if (f.size > 2 * 1024 * 1024) return toast(t('imgTooLarge'), 'error');
    const reader = new FileReader();
    reader.onload = () => {
      const u = currentUser(); if (u) u.avatar = reader.result;
      saveState(); renderSettings();
      toast(t('photoUpdated'), 'success');
    };
    reader.readAsDataURL(f);
  });
  $('#save-profile').addEventListener('click', () => {
    const uObj = currentUser(); if (!uObj) return;
    const name = $('#p-name').value.trim();
    const u = $('#p-username').value.trim().toLowerCase();
    const bio = $('#p-bio').value.trim();
    if (u.length < 3) return toast(t('usernameTooShort'), 'error');
    if (state.accounts.some(a => a.username === u && a.userId !== uObj.id)) return toast(t('usernameTaken'), 'error');
    uObj.name = name || uObj.name; uObj.username = u; uObj.bio = bio;
    state.accounts.forEach(a => { if (a.userId === uObj.id) a.username = u; });
    saveState(); renderSettings();
    toast(t('profileUpdated'), 'success');
  });
  $$('[data-wp]').forEach(btn => btn.addEventListener('click', () => {
    state.settings.wallpaper = btn.dataset.wp;
    saveState(); renderSettings();
    toast(t('wpUpdated'), 'success');
  }));
  $$('.switch[data-key]').forEach(s => s.addEventListener('click', () => {
    const k = s.dataset.key;
    if (k === 'theme') {
      state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
    } else {
      state.settings[k] = !state.settings[k];
    }
    saveState(); renderSettings();
  }));
  $$('[data-unblock]').forEach(b => b.addEventListener('click', () => {
    state.blocked = state.blocked.filter(x => x !== b.dataset.unblock);
    saveState(); renderSettings();
  }));
  $$('[data-block]').forEach(b => b.addEventListener('click', () => {
    state.blocked.push(b.dataset.block);
    saveState(); renderSettings();
  }));
  $('#change-pw').addEventListener('click', () => {
    const oldPw = $('#old-pw').value, newPw = $('#new-pw').value;
    if (!oldPw || !newPw) return toast(t('fillBothFields'), 'error');
    if (newPw.length < 4) return toast(t('passwordMinErr'), 'error');
    const acc = state.accounts.find(a => a.userId === state.currentUserId);
    if (!acc) return toast(t('accNotFound'), 'error');
    if (acc.password !== oldPw) return toast(t('oldPwWrong'), 'error');
    acc.password = newPw; saveState();
    $('#old-pw').value = ''; $('#new-pw').value = '';
    toast(t('pwChanged'), 'success');
  });
  $('#logout-2').addEventListener('click', () => {
    const uObj = currentUser();
    if (uObj) { uObj.online = false; uObj.lastSeen = Date.now(); }
    state.currentUserId = null; state.activeChatId = null; saveState();
    toast(t('loggedOut'), 'success'); navigate('login');
  });
}

function settingRow(icon, title, desc, control) {
  return `<div class="setting-row">
    <div class="ico-box">${icon}</div>
    <div class="text"><div class="title">${escapeHtml(title)}</div><div class="desc">${escapeHtml(desc)}</div></div>
    ${control}
  </div>`;
}
function toggleSwitchHTML(key, on) {
  return `<button type="button" class="switch ${on ? 'on' : ''}" data-key="${key}" aria-label="toggle"></button>`;
}

// ============ Boot ============
loadState();
applyTheme();
applyLanguage();
navigate(state.currentUserId ? 'app' : 'login');
