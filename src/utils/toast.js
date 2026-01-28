import toast from "react-hot-toast";

export const successToast = (msg) =>
  toast.success(msg, {
    icon: "🖤",
    style: {
      borderLeft: "4px solid #000",
    },
  });

export const errorToast = (msg) =>
  toast.error(msg, {
    icon: "⚠️",
    style: {
      borderLeft: "4px solid #e11d48",
    },
  });
