function apiErrorMessage(status, serverMessage) {
  if (typeof serverMessage === 'string' && serverMessage.trim()) return serverMessage.trim();
  if (Number(status) === 401) {
    return 'سرویس ورود یا دسترسی را نپذیرفت (401). حساب، نشانی API و در صورت نیاز کلیدهای مجاز سرویس را بررسی کنید.';
  }
  return `خطای ارتباط با سرویس (${status}).`;
}

module.exports = { apiErrorMessage };
