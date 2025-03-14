const baseUrl = "https://back-end-website-bowlbox3000.onrender.com";

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function login(email: string, password: string) {
  const hashedPassword = await hashPassword(password);

  const result = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password: hashedPassword }),
  }).then((res) => res.json());

  localStorage.setItem("accessToken", result.accessToken);
  localStorage.setItem("refreshToken", result.refreshToken);

  return result;
}

export async function register(email: string, password: string) {
  const hashedPassword = await hashPassword(password);

  const result = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password: hashedPassword }),
  }).then((res) => res.json());

  localStorage.setItem("accessToken", result.accessToken);
  localStorage.setItem("refreshToken", result.refreshToken);

  return result;
}
