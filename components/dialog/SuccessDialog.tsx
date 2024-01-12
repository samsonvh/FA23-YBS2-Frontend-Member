import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const SuccessDialog = ({
  open,
  setOpen,
  message,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  message: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
          <DialogDescription className="tw-text-center">
            <i className="icon-check-circle tw-text-[12rem] lg:tw-text-[14rem] tw-text-emerald-500" />
            <p className="pt-20 tw-text-2xl tw-font-semibold">{message}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
