 = (Get-Content out1.txt | Select-Object -First 1)
 = (Get-Content out2.txt | Select-Object -First 1)
if ( -match 'licdn') {
     = Get-Content content\social-content.ts -Raw
     =  -replace 'fallbackImage: "/Karthik-20-neutral.jpg"', "fallbackImage: """
     =  -replace 'fallbackImage: "/Karthik-66-neutral.jpg"', "fallbackImage: """
    [System.IO.File]::WriteAllText("content\social-content.ts", )
    Write-Output 'Success'
}
