import Swal from "sweetalert2";

export function isEmpty(newContact) {
  switch ("") {
    case newContact.firstName:
    case newContact.lastName:
    case newContact.phone:
    case newContact.email:
    case newContact.profession:
      return false;
    default:
      return true;
  }
};

export function popupInfo(icon, text) {
  return Swal.fire({
    icon: icon,
    iconColor: "var(--color-4)",
    text: text,
    confirmButtonColor: "var(--color-12)",
  });
}

export function popupConfirm(text, confirmButtonText) {
  return Swal.fire({
    text: text,
    icon: "warning",
    iconColor: "var(--color-4)",
    showCancelButton: true,
    confirmButtonColor: "var(--color-12)",
    cancelButtonColor: "var(--color-10)",
    confirmButtonText: confirmButtonText,
  })
}