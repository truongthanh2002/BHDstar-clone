import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const alertError =(text) =>{
    MySwal.fire({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        icon: "error",
        title: text,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
}

export const alertSuccess =(text) =>{
    MySwal.fire({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        icon: "success",
        title: text,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
}

export const alertWanning =(text) =>{
    MySwal.fire({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        icon: "warning",
        title: text,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
}