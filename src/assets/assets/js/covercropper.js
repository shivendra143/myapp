
function readURLL(input) {

    var fuData = document.getElementById('reg-upload-pic2');
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

    $('#user_imagee').cropper('destroy')
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#user_imagee').attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
        setTimeout(initCropperr, 500);
    }
}

function initCropperr() {

    


    var $image = $('#user_imagee');
    $image.cropper({
        aspectRatio: 4 / 3,
        crop: function (event) {
        }
    });
    // Get the Cropper.js instance after initialized
    var cropper = $image.data('cropper');
    // On crop button clicked
    document.getElementById('crop_button2').addEventListener('click', function () {
        $('#myModal2').modal('hide');
        /**
         * Save Croped Image to Server
         */
        var img_base64 = cropper.getCroppedCanvas().toDataURL("image/jpeg", 0.9);
        // var formData = new FormData();
        // formData.append('img_base64', img_base64);
        var str = img_base64;
        str = str.substring(str.indexOf("base64,") + 7);
        $("#uploaded_img2").attr('src', img_base64);
        document.getElementById('profileimage2').value = str;
        console.log(document.getElementById('profileimage2').value);
        // $.ajax('api/users/create-profile-image', {
        //     method: "POST",
        //     data: formData,
        //     processData: false,
        //     contentType: 'application/x-www-form-urlencoded',
        //     success: function (respdata) {
        //         if (respdata.code == 200) {
        //             $('#uploaded_img').attr('src', respdata.url);
        //             $('#profile_img_url').val(respdata.url);
        //         }
        //     },
        //     error: function () {
        //         console.log('Upload error');
        //     }
        // });
    })
}

$(document).ready(function () {
    $("#cropImage2").on("hidden.bs.modal", function () {
        $('#user_image2').cropper('destroy');
        $('#user_image2').attr('src', '/public/images/user.png');
    });
});