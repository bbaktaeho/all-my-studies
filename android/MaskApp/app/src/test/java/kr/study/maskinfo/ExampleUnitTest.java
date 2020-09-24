package kr.study.maskinfo;

import org.junit.Test;

import java.io.IOException;

import kr.study.maskinfo.models.StoreInfo;
import kr.study.maskinfo.repository.MaskService;
import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.moshi.MoshiConverterFactory;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {
    @Test
    public void addition_isCorrect() {
        assertEquals(4, 2 + 2);
    }

    @Test
    public void retrofitTest() throws IOException {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(MaskService.BASE_URL)
                .addConverterFactory(MoshiConverterFactory.create())
                .build();

        MaskService service = retrofit.create(MaskService.class);

        // 데이터를 받아오는 준비를 한 것
        Call<StoreInfo> storeInfoCall = service.fetchStoreInfo();

        // 동기 방식으로 통신
        StoreInfo storeInfo = storeInfoCall.execute().body();

        assertEquals(222, storeInfo.getCount());
        assertEquals(222, storeInfo.getStores().size());
    }
}