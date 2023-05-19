package ma.enset.abderrahim_ait_bouna;


import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.stub.StreamObserver;
import lombok.AllArgsConstructor;
import ma.enset.abderrahim_ait_bouna.feign.VehiculeClientRepository;
import ma.enset.abderrahim_ait_bouna.grpc.stub.RadarGrpcServiceGrpc;
import ma.enset.abderrahim_ait_bouna.grpc.stub.RadarOuterClass;
import ma.enset.abderrahim_ait_bouna.models.Vehicule;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

@SpringBootApplication
@AllArgsConstructor
@EnableFeignClients
public class AbderrahimAitBounaApplication {

    VehiculeClientRepository vehiculeClientRepository;

    public static void main(String[] args) {
        SpringApplication.run(AbderrahimAitBounaApplication.class, args);
    }

    @Bean
    CommandLineRunner start(){
        return args -> {
            ManagedChannel managedChannel = ManagedChannelBuilder.forAddress("localhost", 5060)
                    .usePlaintext().build();
            RadarGrpcServiceGrpc.RadarGrpcServiceStub radarServiceStub = RadarGrpcServiceGrpc.newStub(managedChannel);
            StreamObserver<RadarOuterClass.SaveRadarRequest> RadarStreamObserver = radarServiceStub.radarControl(new StreamObserver<RadarOuterClass.DetectOverSpeed>() {
                @Override
                public void onNext(RadarOuterClass.DetectOverSpeed detectOverSpeed) {

                }

                @Override
                public void onError(Throwable throwable) {

                }

                @Override
                public void onCompleted() {

                }
            });
            Timer timer = new Timer();
            timer.schedule(new TimerTask() {
                int counter=0;
                List<Vehicule> vehiculeList = vehiculeClientRepository.getVehicules();
                @Override
                public void run() {
                    ++counter;
                    int randomNumber = generateNumberInRange(60, 200);
                    System.out.println("Random number between 60 and 120: " + (randomNumber-40));
                    for(Vehicule v : vehiculeList){

                        RadarOuterClass.SaveRadarRequest simulate = RadarOuterClass.SaveRadarRequest.newBuilder()
                                .setVitesseMax(120)
                                .setVitesseVehicule(randomNumber-40)
                                .build();
                        RadarStreamObserver.onNext(simulate);
                    }

                    if (counter > 10){
                        timer.cancel();
                        RadarStreamObserver.onCompleted();
                    }
                }
            }, 0, 1000);
            System.in.read();
        };

    }
    public int generateNumberInRange(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("Invalid range. 'min' must be less than 'max'.");
        }

        Random random = new Random();
        return random.nextInt(max - min + 1) + min;
    }


}
