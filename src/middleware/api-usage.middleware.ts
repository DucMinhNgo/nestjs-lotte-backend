// src/middleware/api-usage.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ApiUsageMiddleware implements NestMiddleware {
    private usedDevices: Set<string> = new Set();

    use(req: any, res: any, next: () => void) {
        const deviceId = req.headers['device-id'];

        console.log({ deviceId });
        console.log(this.usedDevices);
        console.log(this.usedDevices.has(deviceId));



        if (deviceId && !this.usedDevices.has(deviceId)) {
            this.usedDevices.add(deviceId);
            // Cho phép yêu cầu đi tiếp
            next();
        } else {
            res.status(429).json({ message: 'Thiết bị đã sử dụng API trước đó.' });
        }
    }
}
