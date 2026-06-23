import { forgotPassword, login, logout, resendVerificationCode, resetForgottenPassword, signup, validateAuthentication, verifyAccount } from "@/api-client";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { SignupProps } from "@/types/forms";
import { useMutation, useQuery, useQueryClient, } from "@tanstack/react-query"
import { useRouter } from "next/navigation";

export const useValidateAuthentication = () => {
  return useQuery({
    queryKey: ["verify-authentication"],
    queryFn: validateAuthentication,
    gcTime: 0,
    retry: false
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient()
  const { pushToast } = useAppContext();
  const router = useRouter()

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["verify-authentication"], exact: true });
    pushToast({ message: "تم تسجيل الدخول بنجاح", type: "SUCCESS" });
    router.replace("/dashboard");
  }

  const onError = () => {
    pushToast({ message: "فشل تسجيل الدخول", type: "ERROR" });
  }

  return useMutation({
    mutationFn: login,
    onSuccess,
    onError
  })
}

export const useVerifyAccount = () => {
  const { pushToast } = useAppContext();
  const router = useRouter()

  const onSuccess = () => {
    pushToast({ message: "تم توثيق الحساب بنجاح", type: "SUCCESS" });
    router.replace("/login");
  }

  const onError = () => {
    pushToast({ message: "فشل توثيق الحساب", type: "ERROR" });
  }

  return useMutation({
    mutationFn: verifyAccount,
    onSuccess,
    onError
  })
}

export const useRegister = () => {
  const queryClient = useQueryClient()
  const { pushToast } = useAppContext();
  const router = useRouter()

  const onSuccess = (_: unknown, variables: SignupProps) => {
    queryClient.invalidateQueries({ queryKey: ["verify-authentication"], exact: true });
    pushToast({ message: "تم ارسال رمز سري الى صندوق الرسائل الخاص بك", type: "SUCCESS" });
    router.replace(`/verify-account/${encodeURIComponent(variables.email)}`);
  }

  const onError = () => {
    pushToast({ message: "فشل انشاء حسابك, قد يكون الحساب مفعلاً", type: "ERROR" });
  }

  return useMutation({
    mutationFn: signup,
    onSuccess,
    onError
  })
}

export const useForgotPassword = () => {
  const queryClient = useQueryClient()
  const { pushToast } = useAppContext();

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["verify-authentication"], exact: true });
    pushToast({ message: "تم ارسال رمز سري الى صندوق الرسائل الخاص بك", type: "SUCCESS" });
  }

  const onError = () => {
    pushToast({ message: "فشلت العملية, قد يكون الحساب غير موجود او غيرموثق", type: "ERROR" });
  }

  return useMutation({
    mutationFn: forgotPassword,
    onSuccess,
    onError
  })
}

export const useResetForgottenPassword = () => {
  const queryClient = useQueryClient()
  const { pushToast } = useAppContext();
  const router = useRouter()

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["verify-authentication"], exact: true });
    pushToast({ message: "تم تعديل كلمة المرور بنجاح", type: "SUCCESS" });
    router.replace(`/login`);
  }

  const onError = () => {
    pushToast({ message: "حدث خطأ اثناء معالجة طلبك, تحقق من الرمز", type: "ERROR" });
  }

  return useMutation({
    mutationFn: resetForgottenPassword,
    onSuccess,
    onError
  })
}

export const useResendVerificationCode = () => {
  const { pushToast } = useAppContext();

  const onSuccess = () => {
    pushToast({ message: "تم ارسال رمز سري الى صندوق الرسائل الخاص بك", type: "SUCCESS" });
  }

  const onError = () => {
    pushToast({ message: "فشل اعادة ارسال الرمز, حاول مرة اخرى", type: "ERROR" });
  }

  return useMutation({
    mutationFn: resendVerificationCode,
    onSuccess,
    onError
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();

  const onSuccess = () => {
    pushToast({ message: 'تم تسجيل الخروج بنجاح', type: "SUCCESS" });
    queryClient.invalidateQueries({ queryKey: ["verify-authentication"], exact: true });
    router.replace("/login");
  };

  const onError = () => {
    pushToast({ message: "فشل تسجيل الدخول", type: "ERROR" });
  };

  return useMutation({
    mutationFn: logout,
    onSuccess,
    onError,
  });
};