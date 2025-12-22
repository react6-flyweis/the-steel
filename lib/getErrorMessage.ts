/**
 * Extract a user-friendly error message from various error shapes.
 * Handles: string, Error, Axios error with `response.data.message` or `response.data.error`.
 */
export function getErrorMessage(err: unknown, fallback = "An error occurred") {
  if (!err) return fallback;

  if (typeof err === "string") return err;

  if (err instanceof Error) {
    const anyErr = err as any;
    if (anyErr.response?.data) {
      const data = anyErr.response.data;
      if (typeof data === "string") return data;
      if (data?.message) return String(data.message);
      if (data?.error) return String(data.error);
    }

    return err.message || fallback;
  }

  const anyErr = err as any;
  if (anyErr?.response?.data) {
    const data = anyErr.response.data;
    if (typeof data === "string") return data;
    if (data?.message) return String(data.message);
    if (data?.error) return String(data.error);
  }

  if (typeof anyErr?.message === "string") return anyErr.message;

  return fallback;
}

export default getErrorMessage;
