
function readURL(input) {

    var fuData = document.getElementById('reg-upload-pic');
    var FileUploadPath = fuData.value;

    //To check if user upload any file
    if (FileUploadPath == '') {
        alert("Please upload an image");
        return;

    } else {
        var Extension = FileUploadPath.substring(
            FileUploadPath.lastIndexOf('.') + 1).toLowerCase();

        //The file uploaded is an image

        if (Extension == "gif" || Extension == "png" || Extension == "bmp"
            || Extension == "jpeg" || Extension == "jpg") {

        }

        //The file upload is NOT an image
        else {
            alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP. ");
            return;
        }
    }

    $('#user_image').cropper('destroy')
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#user_image').attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
        setTimeout(initCropper, 500);
    }
}

function initCropper() {

    var $image = $('#user_image');
    $image.cropper({
        aspectRatio: 1 / 1,
        crop: function (event) {
        }
    });
    // Get the Cropper.js instance after initialized
    var cropper = $image.data('cropper');
    // On crop button clicked
    document.getElementById('crop_button').addEventListener('click', function () {
        $('#myModal').modal('hide');
        /**
         * Save Croped Image to Server
         */
        var img_base64 = cropper.getCroppedCanvas().toDataURL("image/jpeg", 0.9);
        var str = img_base64;
        str = str.substring(str.indexOf("base64,") + 7);
        $("#uploaded_img").attr('src', img_base64);
        document.getElementById('profileimage').value = str;
        console.log(document.getElementById('profileimage').value);
    })
}

$(document).ready(function () {
    $("#cropImage").on("hidden.bs.modal", function () {
        $('#user_image').cropper('destroy');
        $('#user_image').attr('src', '/public/images/user.png');
    });
});
