package com.example.firebase_upload_image

import android.app.Activity
import android.app.ProgressDialog
import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore
import android.widget.Toast
import com.google.firebase.storage.FirebaseStorage
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    lateinit var filepath: Uri

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        btn_choose.setOnClickListener { startFileChooser() }
        btn_upload.setOnClickListener { uploadFile() }
    }

    private fun startFileChooser() {
        var i = Intent()
        i.type = "image/*"
        i.action = Intent.ACTION_GET_CONTENT
        startActivityForResult(Intent.createChooser(i, "Choose Picture"), 5)
    }

    private fun uploadFile() {
        if (filepath != null) {
            var pd = ProgressDialog(this)
            pd.setTitle("Uploading")
            pd.show()

            var imageRef = FirebaseStorage.getInstance().reference.child("images/pic.jpg")
            imageRef.putFile(filepath)
                    .addOnSuccessListener {
                        pd.dismiss()
                        Toast.makeText(applicationContext, "성공", Toast.LENGTH_SHORT).show()
                    }
                    .addOnFailureListener {
                        pd.dismiss()
                        Toast.makeText(applicationContext, "실패", Toast.LENGTH_SHORT).show()

                    }
                    .addOnProgressListener { p0 ->
                        var progress = (100.0 * p0.bytesTransferred ) / p0.totalByteCount
                        pd.setMessage("Uploaded ${progress.toInt()}%")
                    }
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == 5 && resultCode == Activity.RESULT_OK && data != null) {
            filepath = data.data!!
            var bitmap = MediaStore.Images.Media.getBitmap(contentResolver, filepath)
            img_image.setImageBitmap(bitmap)
        }
    }
}