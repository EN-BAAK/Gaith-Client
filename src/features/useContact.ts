import { sendContactMessage } from "@/api-client";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { useMutation } from "@tanstack/react-query";

export const useSendContactMessage = () => {
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: sendContactMessage,
    onSuccess: () => {
      pushToast({ message: "تم إرسال رسالتك بنجاح، سنقوم بالتواصل معك قريباً", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية إرسال الرسالة، يرجى المحاولة مرة أخرى", type: "ERROR" });
    },
  });
};